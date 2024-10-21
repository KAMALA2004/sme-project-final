// src/components/ScheduledMeetings.js
import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Import Supabase client
import { useNavigate } from 'react-router-dom';

const ScheduledMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const { data, error } = await supabase.from('registrations').select('*');
        
        if (error) {
          throw error;
        }

        const uniqueMeetingsMap = new Map();
        data.forEach(meeting => {
          if (!uniqueMeetingsMap.has(meeting.event_id)) {
            uniqueMeetingsMap.set(meeting.event_id, {
              ...meeting,
              registrationsCount: 1
            });
          } else {
            uniqueMeetingsMap.get(meeting.event_id).registrationsCount += 1;
          }
        });

        setMeetings(Array.from(uniqueMeetingsMap.values()));
      } catch (error) {
        console.error("Error fetching meetings:", error);
        setErrorMessage('Error fetching meetings. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeetings();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Scheduled Meetings</h2>
      {errorMessage && <p>{errorMessage}</p>}
      {meetings.length === 0 ? (
        <p>No scheduled meetings found.</p>
      ) : (
        <ul>
          {meetings.map(meeting => (
            <li key={meeting.id}>
              <strong>Event ID:</strong> {meeting.event_id} - <strong>Event Name:</strong> {meeting.event_name} - <strong>Registrations:</strong> {meeting.registrationsCount}
              <button onClick={() => navigate(`/video-call/sme/${meeting.event_id}`)}>Join as SME</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScheduledMeetings;

import React, { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient'; // Import Supabase client

const ScheduledMeetings = () => {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchMeetings = async () => {
      try {
        const { data, error } = await supabase.from('registrations').select('*');
        
        if (error) {
          throw error;
        }

        // Use a Map to ensure unique meetings based on event_id
        const uniqueMeetingsMap = new Map();
        
        // Iterate through fetched data and store unique events
        data.forEach(meeting => {
          // Check if the event_id is already in the map
          if (!uniqueMeetingsMap.has(meeting.event_id)) {
            // Add unique meeting based on event_id
            uniqueMeetingsMap.set(meeting.event_id, {
              ...meeting,
              registrationsCount: 1 // Start counting registrations
            });
          } else {
            // Increment the count for existing event_id
            uniqueMeetingsMap.get(meeting.event_id).registrationsCount += 1;
          }
        });

        // Convert Map values to an array for state
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
              <button onClick={() => {/* Join meeting logic */}}>Join Meeting</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ScheduledMeetings;

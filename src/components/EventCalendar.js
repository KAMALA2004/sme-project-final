import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './EventCalendar.css';
import { events } from '../data/events';

const EventCalendar = () => {
  const [registeredEvents, setRegisteredEvents] = useState({});
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleRegister = (eventId) => {
    setRegisteredEvents((prev) => ({
      ...prev,
      [eventId]: true, // Mark the event as registered
    }));
    // Navigate to the Event Registration page with the event ID
    navigate(`/register/${eventId}`); 
  };

  return (
    <section className="event-calendar">
      <h2>Event Calendar and Networking Opportunities</h2>
      <Link to="/scheduled-meetings" className="view-scheduled-button">View Scheduled Meetings</Link>
      <div className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            {registeredEvents[event.id] ? (
              <button className="registered-button" disabled>
                Registered Successfully
              </button>
            ) : (
              <button onClick={() => handleRegister(event.id)} className="register-button">
                Register Now
              </button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;

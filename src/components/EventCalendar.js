import React from 'react';
import { Link } from 'react-router-dom';
import './EventCalendar.css';
import { events } from '../data/events';

const EventCalendar = ({ registeredEvents }) => {
  return (
    <section className="event-calendar">
      <h2>Event Calendar and Networking Opportunities</h2>
      <div className="event-grid">
        {events.map(event => (
          <div key={event.id} className="event-card">
            <h3>{event.title}</h3>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p>{event.description}</p>
            {registeredEvents[event.id] ? (
              <button className="registered-button">Registered Successfully</button>
            ) : (
              <Link to={`/register/${event.id}`} className="register-button">
                Register Now
              </Link>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventCalendar;

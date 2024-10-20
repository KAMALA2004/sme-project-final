import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { events } from '../data/events';
import { supabase } from '../supabaseClient';
import './EventRegistration.css';

const EventRegistration = ({ onRegister }) => {
  const { eventId } = useParams();
  const event = events.find(e => e.id === parseInt(eventId));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessPlan: '',
    updates: 'no',
  });

  if (!event) {
    return <p>Event not found!</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([{
            event_id: event.id,
            event_name: event.title,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_plan: formData.businessPlan,
            updates: formData.updates,
        }]);
  
      if (error) throw error;

      // Show success message
      alert('Registration successful!');

      // Optionally, redirect to scheduled meetings
      navigate('/scheduled-meetings');
      
    } catch (error) {
      console.error('Error registering for event:', error.message);
      alert('Registration failed: ' + error.message); // Display error message
    }
};

  return (
    <section className="event-registration">
      <h2>Register for {event.title}</h2>
      <form className="registration-form" onSubmit={handleSubmit}>
        {/* Form Fields */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="businessPlan">Business Plan / Domain</label>
          <input type="text" id="businessPlan" name="businessPlan" value={formData.businessPlan} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Would you like to receive updates about future events?</label>
          <div>
            <input type="radio" id="updatesYes" name="updates" value="yes" checked={formData.updates === 'yes'} onChange={handleChange} />
            <label htmlFor="updatesYes">Yes</label>
          </div>
          <div>
            <input type="radio" id="updatesNo" name="updates" value="no" checked={formData.updates === 'no'} onChange={handleChange} />
            <label htmlFor="updatesNo">No</label>
          </div>
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default EventRegistration;

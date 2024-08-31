// src/App.js
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'; // Keeping the Header
import HomePage from './components/HomePage'; // Keeping other components too
import AccessibleLoans from './components/AccessibleLoans';
import InvestorContacts from './components/InvestorContacts';
import Chatbot from './components/Chatbot';
import PersonalizedSearch from './components/PersonalizedSearch';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register';
import EventCalendar from './components/EventCalendar';
import SuccessStories from './components/SuccessStories';
import EventRegistration from './components/EventRegistration';
import SuccessStoryDetails from './components/SuccessStoryDetails';

function App() {
  const [registeredEvents, setRegisteredEvents] = useState({});

  const handleRegister = (eventId) => {
    setRegisteredEvents(prev => ({ ...prev, [eventId]: true }));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="app-container">
          <Routes>
            <Route path="/" element={<Login />} />  {/* Default route is Login */}
            <Route path="/register" element={<Register />} />  {/* Route for Register */}
            <Route path="/profile" element={<Profile />} />  {/* Route for Profile */}
            <Route path="/home" element={<HomePage />} />  {/* Route for HomePage */}
            <Route path="/loans" element={<AccessibleLoans />} />  {/* Route for AccessibleLoans */}
            
            {/* Investor Contacts Route with Event Components */}
            <Route
              path="/investors"
              element={
                <div>
                  <InvestorContacts />
                  <EventCalendar registeredEvents={registeredEvents} />
                  <SuccessStories />
                </div>
              }
            />
            
            <Route path="/chatbot" element={<Chatbot />} />  {/* Route for Chatbot */}
            <Route path="/personalized-search" element={<PersonalizedSearch />} />  {/* Route for PersonalizedSearch */}
            
            {/* Events Route */}
            <Route
              path="/events"
              element={
                <div>
                  <EventCalendar registeredEvents={registeredEvents} />
                  <SuccessStories />
                </div>
              }
            />
            
            <Route
              path="/register/:eventId"
              element={<EventRegistration onRegister={handleRegister} />}
            />
            <Route
              path="/success-story/:storyId"
              element={<SuccessStoryDetails />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Header from './components/Header';
import HomePage from './components/HomePage';
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
import InvestorVideoChat from './components/InvestorVideoChat'; // Import InvestorVideoChat
import SMEVideoChat from './components/SMEVideoChat';
import LoanDetails from './components/LoanDetails';
import ScheduledMeetings from './components/ScheduledMeetings'; // Import ScheduledMeetings


function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [registeredEvents, setRegisteredEvents] = useState({});

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleRegister = (eventId) => {
    setRegisteredEvents(prev => ({ ...prev, [eventId]: true }));
  };

  if (loading) return <div>Loading...</div>; // Optional loading state

  return (
    <Router>
      <div className="App">
        {user ? (
          <>
            <Header />
            <div className="app-container">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/loans" element={<AccessibleLoans />} />
                <Route path="/loan-details/:loanName" element={<LoanDetails />} /> 
                <Route
                  path="/investors"
                  element={
                    <>
                      <InvestorContacts />
                      <EventCalendar registeredEvents={registeredEvents} />
                      <SuccessStories />
                    </>
                  }
                />
                <Route path="/chatbot" element={<Chatbot />} />
                <Route path="/personalized-search" element={<PersonalizedSearch />} />
                <Route
                  path="/events"
                  element={
                    <>
                      <EventCalendar registeredEvents={registeredEvents} />
                      <SuccessStories />
                    </>
                  }
                />
                <Route path="/register/:eventId" element={<EventRegistration onRegister={handleRegister} />} />
                <Route path="/success-story/:storyId" element={<SuccessStoryDetails />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/scheduled-meetings" element={<ScheduledMeetings />} /> 
                <Route path="/sme-video-chat" element={<SMEVideoChat eventId="meeting-room-1" />} />
                <Route path="/investor-video-chat" element={<InvestorVideoChat eventId="meeting-room-1" />} />
               
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
            
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
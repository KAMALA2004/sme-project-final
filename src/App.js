import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AccessibleLoans from './components/AccessibleLoans';
import InvestorContacts from './components/InvestorContacts';
import Chatbot from './components/Chatbot';
import PersonalizedSearch from './components/PersonalizedSearch';
import Profile from './components/Profile';
import Login from './components/Login';  // Import Login component
import Register from './components/Register';  // Import Register component
import InvestorDetailsModal from './components/InvestorDetailsModal';
import './App.css';  // Ensure this file exists for general styling

const App = () => {
  const location = useLocation();

  // Hide header on Login and Register pages
  const hideHeader = location.pathname === '/' || location.pathname === '/register';

  return (
    <div>
      {!hideHeader && <Header />}  {/* Conditionally render header */}
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Login />} />  {/* Default route is Login */}
          <Route path="/register" element={<Register />} />  {/* Route for Register */}
          <Route path="/profile" element={<Profile />} />  {/* Route for Profile */}
          <Route path="/home" element={<HomePage />} />  {/* Route for HomePage */}
          <Route path="/loans" element={<AccessibleLoans />} />  {/* Route for AccessibleLoans */}
          <Route path="/investors" element={<InvestorContacts />} />  {/* Route for InvestorContacts */}
          <Route path="/chatbot" element={<Chatbot />} />  {/* Route for Chatbot */}
          <Route path="/search" element={<PersonalizedSearch />} />  {/* Route for PersonalizedSearch */}
        </Routes>
      </div>
    </div>
  );
};

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

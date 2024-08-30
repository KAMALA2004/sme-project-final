// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AccessibleLoans from './components/AccessibleLoans';
import InvestorContacts from './components/InvestorContacts';
import Chatbot from './components/Chatbot';
import PersonalizedSearch from './components/PersonalizedSearch';
import Profile from './components/Profile';
import './App.css'; // Ensure this file exists for general styling

const App = () => (
  <Router>
    <Header />
    <div className="app-container">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/loans" element={<AccessibleLoans />} />
        <Route path="/investors" element={<InvestorContacts />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/search" element={<PersonalizedSearch />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  </Router>
);

export default App;

// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/home">🏠 Home</Link></li>
        <li><Link to="/loans">📊 Accessible Loans</Link></li>
        <li><Link to="/investors">👤 Investor Contacts</Link></li>
        <li><Link to="/chatbot">🤖 AI Chatbot</Link></li>
        <li><Link to="/profile">👤 Profile</Link></li>
      </ul>
    </nav>
    <div className="personalized">
      <Link to="/personalized-search">Go Personalized</Link>
    </div>
  </header>
);

export default Header;

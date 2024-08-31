// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header className="header">
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item"><Link to="/home" className="nav__link">Home</Link></li>
        <li className="nav__item"><Link to="/loans" className="nav__link">Accessible Loans</Link></li>
        <li className="nav__item"><Link to="/investors" className="nav__link">Investor Contacts</Link></li>
        <li className="nav__item"><Link to="/chatbot" className="nav__link">AI Chatbot</Link></li>
        <li className="nav__item"><Link to="/profile" className="nav__link">Profile</Link></li>
      </ul>
    </nav>
    <div className="personalized-button-container">
      <Link to="/personalized-search" className="personalized-button">Go Personalized</Link>
    </div>
  </header>
);

export default Header;

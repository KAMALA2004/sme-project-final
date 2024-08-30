// src/components/InvestorContacts.js
import React, { useState, useEffect } from 'react';
import './InvestorContacts.css'; // Ensure this file exists for custom styling

const InvestorContacts = () => {
  const [investors, setInvestors] = useState([]);

  useEffect(() => {
    const fetchInvestors = async () => {
      try {
        const response = await fetch('https://api.example.com/investors');
        if (response.ok) {
          const data = await response.json();
          setInvestors(data.investors);
        } else {
          console.error('Failed to fetch investors');
        }
      } catch (error) {
        console.error('Error fetching investors:', error);
      }
    };

    fetchInvestors();
  }, []);

  return (
    <div className="investors">
      <h2 className="investors__title">Investor Contacts</h2>
      <ul className="investors__list">
        {investors.map((investor, index) => (
          <li key={index} className="investors__item">
            <strong>{investor.name}</strong>: {investor.contactInfo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InvestorContacts;

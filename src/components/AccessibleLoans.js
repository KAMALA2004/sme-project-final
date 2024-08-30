import React, { useState, useEffect } from 'react';
import './AccessibleLoans.css'; // Ensure this file exists for custom styling

const AccessibleLoans = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Hardcoded loan data for testing
    const sampleLoans = [
      {
        name: 'Home Loan',
        description: 'A loan for purchasing or renovating a home.',
        url: 'https://www.google.com/search?q=Home+Loan'
      },
      {
        name: 'Education Loan',
        description: 'A loan to finance higher education.',
        url: 'https://www.google.com/search?q=Education+Loan'
      },
      {
        name: 'Personal Loan',
        description: 'A loan for personal expenses.',
        url: 'https://www.google.com/search?q=Personal+Loan'
      }
    ];
    setLoans(sampleLoans);
  }, []);

  const handleClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <div className="loans">
      <h2 className="loans__title">Accessible Loans and Schemes</h2>
      <ul className="loans__list">
        {loans.length > 0 ? (
          loans.map((loan, index) => (
            <li
              key={index}
              onClick={() => handleClick(loan.url)}
              className="loans__item"
            >
              <strong>{loan.name}</strong>: {loan.description}
            </li>
          ))
        ) : (
          <li className="loans__item">No loans available</li>
        )}
      </ul>
    </div>
  );
};

export default AccessibleLoans;

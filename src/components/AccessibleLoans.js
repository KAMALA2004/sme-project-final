import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AccessibleLoans.css';

const AccessibleLoans = () => {
  const [loans, setLoans] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const sampleLoans = [
      {
        name: 'SME Working Capital Loan',
        icon: '💼',
        description: 'For daily business operations',
        category: 'Working Capital',
        url: '/loan-details/SME%20Working%20Capital%20Loan'
      },
      {
        name: 'SME Equipment Loan',
        icon: '🛠',
        description: 'For purchasing equipment',
        category: 'Equipment',
        url: '/loan-details/SME%20Equipment%20Loan'
      },
      {
        name: 'SME Trade Finance Loan',
        icon: '📈',
        description: 'For trade financing',
        category: 'Trade Finance',
        url: '/loan-details/SME%20Trade%20Finance%20Loan'
      },
      {
        name: 'Commercial Vehicle Loan',
        icon: '🚚',
        description: 'For commercial vehicles',
        category: 'Vehicle',
        url: '/loan-details/Commercial%20Vehicle%20Loan'
      }
    ];

    setLoans(sampleLoans);
  }, []);

  const filteredLoans = loans.filter(loan => 
    (category === 'All' || loan.category === category) &&
    loan.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="accessible-loans">
      <div className="filter-options">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="All">All Categories</option>
          <option value="Working Capital">Working Capital</option>
          <option value="Equipment">Equipment</option>
          <option value="Trade Finance">Trade Finance</option>
          <option value="Vehicle">Vehicle</option>
        </select>
        <input 
          type="text" 
          placeholder="Search loans..." 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
      </div>
      {filteredLoans.length > 0 ? (
        <div className="loan-cards">
          {filteredLoans.map((loan, index) => (
            <div key={index} className="loan-card">
              <div className="loan-icon">{loan.icon}</div>
              <div className="loan-details">
                <h3 className="loan-name">
                  <Link to={loan.url}>{loan.name}</Link>
                </h3>
                <p className="loan-description">{loan.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No loans available</p>
      )}
    </div>
  );
};

export default AccessibleLoans;
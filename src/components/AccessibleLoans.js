import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AccessibleLoans.css';

const AccessibleLoans = () => {
  const [loans, setLoans] = useState([]);
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      const sampleLoans = [
        {
          id: 1,
          name: 'SME Working Capital Loan',
          icon: '💼',
          description: 'Flexible financing for your daily business operations and cash flow needs',
          category: 'Working Capital',
          url: '/loan-details/SME%20Working%20Capital%20Loan',
          interestRate: '5.5%',
          term: '1-5 years',
          amount: 'Up to $500,000'
        },
        {
          id: 2,
          name: 'SME Equipment Loan',
          icon: '🛠',
          description: 'Finance for purchasing new equipment or upgrading existing machinery',
          category: 'Equipment',
          url: '/loan-details/SME%20Equipment%20Loan',
          interestRate: '6.2%',
          term: '2-7 years',
          amount: 'Up to $1,000,000'
        },
        {
          id: 3,
          name: 'SME Trade Finance Loan',
          icon: '📈',
          description: 'Solutions for import/export businesses to facilitate international trade',
          category: 'Trade Finance',
          url: '/loan-details/SME%20Trade%20Finance%20Loan',
          interestRate: '4.8%',
          term: '6-24 months',
          amount: 'Up to $2,000,000'
        },
        {
          id: 4,
          name: 'Commercial Vehicle Loan',
          icon: '🚚',
          description: 'Financing for trucks, vans and other commercial vehicles',
          category: 'Vehicle',
          url: '/loan-details/Commercial%20Vehicle%20Loan',
          interestRate: '5.9%',
          term: '3-8 years',
          amount: 'Up to $750,000'
        }
      ];

      setLoans(sampleLoans);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const filteredLoans = loans.filter(loan => 
    (category === 'All' || loan.category === category) &&
    loan.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['All', ...new Set(loans.map(loan => loan.category))];

  return (
    <div className="accessible-loans-container">
      <div className="loan-hero">
        <h1>Business Loan Products</h1>
        <p>Find the perfect financing solution for your business needs</p>
      </div>
      
      <div className="accessible-loans">
        <div className="loan-filters">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search loans..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="loan-search"
            />
            <span className="search-icon">🔍</span>
          </div>
          
          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-tab ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="loan-loading">
            <div className="loading-spinner"></div>
            <p>Loading loan products...</p>
          </div>
        ) : filteredLoans.length > 0 ? (
          <div className="loan-cards">
            {filteredLoans.map((loan) => (
              <div key={loan.id} className="loan-card">
                <div className="loan-card-header">
                  <div className="loan-icon">{loan.icon}</div>
                  <h3 className="loan-name">
                    <Link to={loan.url}>{loan.name}</Link>
                  </h3>
                </div>
                <p className="loan-description">{loan.description}</p>
                <div className="loan-details">
                  <div className="loan-detail">
                    <span className="detail-label">Rate</span>
                    <span className="detail-value">{loan.interestRate}</span>
                  </div>
                  <div className="loan-detail">
                    <span className="detail-label">Term</span>
                    <span className="detail-value">{loan.term}</span>
                  </div>
                  <div className="loan-detail">
                    <span className="detail-label">Amount</span>
                    <span className="detail-value">{loan.amount}</span>
                  </div>
                </div>
                <Link to={loan.url} className="loan-cta">Learn More →</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No loans match your search criteria. Try adjusting your filters.</p>
            <button 
              className="reset-filters" 
              onClick={() => {
                setCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccessibleLoans;
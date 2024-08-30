import React, { useState, useEffect } from 'react';
import './InvestorContacts.css';
import { FaFilter } from 'react-icons/fa';
import InvestorDetailsModal from './InvestorDetailsModal';

const InvestorContacts = () => {
  const [investors, setInvestors] = useState([]);
  const [filteredInvestors, setFilteredInvestors] = useState([]);
  const [filter, setFilter] = useState('');
  const [selectedInvestor, setSelectedInvestor] = useState(null);

  useEffect(() => {
    const data = [
      { name: 'Investor 1', category: 'Tech', contactInfo: 'investor1@example.com', image: '/photos/investor1.jpg', reviews: 'Great for startups!', location: 'San Francisco, CA', yearsOfExperience: 10, 
        investmentFocus: 'Early-stage tech companies', successfulInvestments: 25, bio: 'Investor 1 has over 10 years of experience in tech investments, focusing on early-stage startups.' },
      { name: 'Investor 2', category: 'Healthcare', contactInfo: 'investor2@example.com', image: '/photos/investor2.png', reviews: 'Helpful and supportive.', 
        location: 'Boston, MA', yearsOfExperience: 15,  investmentFocus: 'Biotech and healthcare startups',  successfulInvestments: 30, bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },
      { name: 'Investor 3', category: 'Retail', contactInfo: 'investor3@example.com', image: '/photos/investor3.png', reviews: 'Helpful and supportive.', bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },
      { name: 'Investor 4', category: 'Finance', contactInfo: 'investor4@example.com', image: '/photos/investor4.png', reviews: 'Helpful and supportive.', bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },
      { name: 'Investor 5', category: 'Healthcare', contactInfo: 'investor5@example.com', image: '/photos/investor1.jpg', reviews: 'Helpful and supportive.', bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },
      { name: 'Investor 6', category: 'Tech', contactInfo: 'investor6@example.com', image: '/photos/investor2.png', reviews: 'Helpful and supportive.', bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },
      { name: 'Investor 7', category: 'Real Estate', contactInfo: 'investor7@example.com', image: '/photos/investor4.png', reviews: 'Helpful and supportive.', bio: 'Investor 2 is a leading expert in healthcare investments with a portfolio of over 50 companies.' },

      // ... Add more investors
    ];
    setInvestors(data);
    setFilteredInvestors(data);
  }, []);

  const handleFilterChange = (e) => {
    const category = e.target.value;
    setFilter(category);
    if (category === '') {
      setFilteredInvestors(investors);
    } else {
      const filtered = investors.filter(investor => investor.category.toLowerCase() === category.toLowerCase());
      setFilteredInvestors(filtered);
    }
  };

  const handleInvestorClick = (investor) => {
    setSelectedInvestor(investor);
  };

  const closeModal = () => {
    setSelectedInvestor(null);
  };
  return (
    <div className="investors">
      <h2 className="investors__title">Investor Contacts</h2>
      <div className="investors__filter-container">
        <FaFilter className="investors__filter-icon" />
        <select
          value={filter}
          onChange={handleFilterChange}
          className="investors__filter-select"
        >
          <option value="">All Categories</option>
          <option value="Tech">Tech</option>
          <option value="Healthcare">Healthcare</option>
          <option value="Retail">Retail</option>
          <option value="Finance">Finance</option>
          <option value="Real Estate">Real Estate</option>
        </select>
      </div>
      <div className="investors__list">
        {filteredInvestors.map((investor, index) => (
          <div key={index} className="investors__item">
            <img src={investor.image} alt={investor.name} className="investors__image" />
            <div>
              <strong className="investor-name" onClick={() => handleInvestorClick(investor)}>
                {investor.name}
              </strong> <br />
              <small>Category: {investor.category}</small> <br />
              <small>{investor.contactInfo}</small> <br />
              <small>{investor.reviews}</small>
            </div>
          </div>
        ))}
      </div>

      {selectedInvestor && (
        <InvestorDetailsModal investor={selectedInvestor} onClose={closeModal} />
      )}
    </div>
  );
};

export default InvestorContacts;
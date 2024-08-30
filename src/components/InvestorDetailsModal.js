import React from 'react';
import './InvestorDetailsModal.css';

const InvestorDetailsModal = ({ investor, onClose }) => {
  if (!investor) {
    return null; // Return nothing if investor is undefined
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{investor.name}</h2>
        <p>Category: {investor.category}</p>
        <p>Contact: {investor.contactInfo}</p>
        <p>Reviews: {investor.reviews}</p>
        <p>Location: {investor.location}</p>
        <p>Years of Experience: {investor.yearsOfExperience}</p>
        <p>Investment Focus: {investor.investmentFocus}</p>
        <p>Successful Investments: {investor.successfulInvestments}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default InvestorDetailsModal;
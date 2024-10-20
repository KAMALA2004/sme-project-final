import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './LoanDetails.css';

const bankDetails = {
  'SME Working Capital Loan': {
    'State Bank of India (SBI)': {
      interestRate: '8% to 13%',
      pros: 'Wide branch network, competitive rates for secured loans.',
      cons: 'Lengthy approval process.',
      eligibility: '2-3 years of business operation, positive net worth.',
      howToProceed: 'Visit a branch, submit documents like financial statements, KYC, collateral details.',
    },
    'HDFC Bank': {
      interestRate: '10% to 14%',
      pros: 'Fast processing, digital loan management.',
      cons: 'Higher interest for unsecured loans.',
      eligibility: '3 years of business operation, turnover of ₹40 lakhs/year.',
      howToProceed: 'Apply online or at a branch, submit business and financial documents.',
    },
    'ICICI Bank': {
      interestRate: '8.5% to 12%',
      pros: 'Quick approval for pre-approved customers.',
      cons: 'Stricter criteria for startups.',
      eligibility: '2 years of business operation, good credit score.',
      howToProceed: 'Apply online, provide necessary documents, pre-approval available.',
    }
  },
  'SME Equipment Loan': {
    'Axis Bank': {
      interestRate: '9% to 12%',
      pros: 'Flexible repayment options, dedicated relationship managers.',
      cons: 'Higher fees for some loan products.',
      eligibility: '2 years of business operation, minimum turnover of ₹50 lakhs.',
      howToProceed: 'Apply online, provide KYC and business financials.',
    },
    'Kotak Mahindra Bank': {
      interestRate: '9.5% to 13%',
      pros: 'Customized loan solutions, fast approval process.',
      cons: 'Higher interest rates for unsecured loans.',
      eligibility: '3 years of business operation, positive cash flow.',
      howToProceed: 'Visit a branch or apply online, submit business and KYC documents.',
    },
    'ICICI Bank': {
      interestRate: '8.75% to 13%',
      pros: 'Specialized equipment financing options.',
      cons: 'Longer approval times for high-value loans.',
      eligibility: '2 years of business operation, stable financials.',
      howToProceed: 'Apply through the business banking portal, submit detailed equipment invoices.',
    }
  },
  'SME Trade Finance Loan': {
    'Axis Bank': {
      interestRate: '8.5% to 12%',
      pros: 'Supports international trade, competitive rates.',
      cons: 'Requires collateral, complex documentation.',
      eligibility: 'Established businesses involved in import/export.',
      howToProceed: 'Apply at an Axis Bank branch, submit trade documents, financials, and collateral details.',
    },
    'ICICI Bank': {
      interestRate: '8% to 11%',
      pros: 'Wide range of trade finance products, flexible terms.',
      cons: 'Requires strong credit profile and business history.',
      eligibility: 'SMEs involved in domestic and international trade.',
      howToProceed: 'Apply online or at a branch, provide trade documents, business financials, and collateral (if needed).',
    },
    'Yes Bank': {
      interestRate: '9% to 12%',
      pros: 'Specialized trade finance solutions, competitive interest rates.',
      cons: 'Limited to established businesses with a strong trade history.',
      eligibility: 'SMEs with consistent trade volumes and good credit scores.',
      howToProceed: 'Apply via Yes Bank’s SME portal or at a branch, submit trade-related documents, business financials, and collateral details.',
    }
  },
  'Commercial Vehicle Loan': {
    'HDFC Bank': {
      interestRate: '10% to 14%',
      pros: 'Easy application process, available for new and used vehicles.',
      cons: 'Higher interest rates for older vehicles.',
      eligibility: 'Transport businesses, fleet operators with 2 years of operation.',
      howToProceed: 'Apply online or visit a branch, submit vehicle details, KYC, and business financials.',
    },
    'ICICI Bank': {
      interestRate: '8.5% to 12%',
      pros: 'Fast processing, flexible tenure.',
      cons: 'Requires good credit history for the best rates.',
      eligibility: 'Transport businesses with 2 years of operation and good credit.',
      howToProceed: 'Apply online, provide vehicle details, business financials, and KYC.',
    },
    'Axis Bank': {
      interestRate: '9% to 13%',
      pros: 'Competitive rates, available for various commercial vehicles.',
      cons: 'Loan amount tied to vehicle value.',
      eligibility: 'Businesses involved in logistics, transport, or fleet operations.',
      howToProceed: 'Visit a branch or apply online, submit vehicle proforma invoice, business financials, and KYC.',
    }
  }
};

const LoanDetails = () => {
  const { loanName } = useParams();
  const navigate = useNavigate(); // Change here
  const [selectedBank, setSelectedBank] = useState(null);

  const handleBankClick = (bank) => {
    setSelectedBank(bank);
  };

  const loanInfo = {
    'SME Working Capital Loan': {
      name: 'SME Working Capital Loan',
      bankOptions: [
        'State Bank of India (SBI)',
        'HDFC Bank',
        'ICICI Bank'
      ]
    },
    'SME Equipment Loan': {
      name: 'SME Equipment Loan',
      bankOptions: [
        'Axis Bank',
        'Kotak Mahindra Bank',
        'ICICI Bank'
      ]
    },
    'SME Trade Finance Loan': {
      name: 'Trade Finance Loan',
      bankOptions: [
        'Axis Bank',
        'ICICI Bank',
        'Yes Bank'
      ]
    },
    'Commercial Vehicle Loan': {
      name: 'Commercial Vehicle Loan',
      bankOptions: [
        'HDFC Bank',
        'ICICI Bank',
        'Axis Bank'
      ]
    }
  };

  const details = loanInfo[decodeURIComponent(loanName)];

  
  return (
    <div className="loan-detail-page">
      <h1>{details.name}</h1>
      <div className="bank-buttons">
        {details.bankOptions.map((bank, index) => (
          <button
            key={index}
            onClick={() => handleBankClick(bank)}
            className="bank-button"
          >
            {bank}
          </button>
        ))}
      </div>
      {selectedBank && (
        <div className="bank-details">
          <h2>{selectedBank}</h2>
          <p><strong>Interest Rate:</strong> {bankDetails[decodeURIComponent(loanName)][selectedBank].interestRate}</p>
          <p><strong>Pros:</strong> {bankDetails[decodeURIComponent(loanName)][selectedBank].pros}</p>
          <p><strong>Cons:</strong> {bankDetails[decodeURIComponent(loanName)][selectedBank].cons}</p>
          <p><strong>Eligibility:</strong> {bankDetails[decodeURIComponent(loanName)][selectedBank].eligibility}</p>
          <p><strong>How to Proceed:</strong> {bankDetails[decodeURIComponent(loanName)][selectedBank].howToProceed}</p>
        </div>
      )}
      
    </div>
  );
};

export default LoanDetails;
// src/components/PersonalizedSearch.js
import React, { useState } from 'react';
import './PersonalizedSearch.css';

const PersonalizedSearch = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState([]);

  const handleQuestionChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setStep(4); // Set to the results step
    try {
      const response = await fetch('https://api.example.com/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers),
      });
      if (response.ok) {
        const data = await response.json();
        setResults(data.results);
      } else {
        console.error('Failed to fetch results');
      }
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  };

  return (
    <div className="personalized-search">
      {step === 1 && (
        <div className="question-container active">
          <h2>Are you a woman entrepreneur?</h2>
          <form>
            <label>
              <input type="radio" name="isWoman" value="yes" onChange={handleQuestionChange} /> Yes
            </label>
            <label>
              <input type="radio" name="isWoman" value="no" onChange={handleQuestionChange} /> No
            </label>
            <button type="button" onClick={handleNext}>Next</button>
          </form>
        </div>
      )}
      {step === 2 && (
        <div className="question-container active">
          <h2>What is your business sector?</h2>
          <form>
            <label>
              <input type="radio" name="sector" value="Technology" onChange={handleQuestionChange} /> Technology
            </label>
            <label>
              <input type="radio" name="sector" value="Healthcare" onChange={handleQuestionChange} /> Healthcare
            </label>
            <label>
              <input type="radio" name="sector" value="Finance" onChange={handleQuestionChange} /> Finance
            </label>
            <label>
              <input type="radio" name="sector" value="Retail" onChange={handleQuestionChange} /> Retail
            </label>
            <label>
              <input type="radio" name="sector" value="Education" onChange={handleQuestionChange} /> Education
            </label>
            <label>
              <input type="radio" name="sector" value="Manufacturing" onChange={handleQuestionChange} /> Manufacturing
            </label>
            <label>
              <input type="radio" name="sector" value="Hospitality" onChange={handleQuestionChange} /> Hospitality
            </label>
            <label>
              <input type="radio" name="sector" value="Construction" onChange={handleQuestionChange} /> Construction
            </label>
            <label>
              <input type="radio" name="sector" value="Agriculture" onChange={handleQuestionChange} /> Agriculture
            </label>
            <button type="button" onClick={handleNext}>Next</button>
          </form>
        </div>
      )}
      {step === 3 && (
        <div className="question-container active">
          <h2>What is the size of your business?</h2>
          <form>
            <label>
              <input type="radio" name="businessSize" value="small" onChange={handleQuestionChange} /> Small
            </label>
            <label>
              <input type="radio" name="businessSize" value="medium" onChange={handleQuestionChange} /> Medium
            </label>
            <label>
              <input type="radio" name="businessSize" value="large" onChange={handleQuestionChange} /> Large
            </label>
            <button type="button" onClick={handleNext}>Submit</button>
          </form>
        </div>
      )}
      {step === 4 && (
        <div className="results">
          <h2>Results:</h2>
          <div>
            <h3>Loans and Schemes:</h3>
            {results.loans && results.loans.map((loan, index) => (
              <div key={index} className="result-item">
                {loan.name} - {loan.description}
              </div>
            ))}
          </div>
          <div>
            <h3>Investors:</h3>
            {results.investors && results.investors.map((investor, index) => (
              <div key={index} className="result-item">
                {investor.name} - {investor.description}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizedSearch;

// src/components/PersonalizedSearch.js
import React, { useState } from 'react';
import './PersonalizedSearch.css'; // Ensure this file exists for custom styling

const PersonalizedSearch = () => {
  const [criteria, setCriteria] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://api.example.com/search?q=${criteria}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error('Failed to fetch search results');
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="search">
      <h2 className="search__title">Personalized Search</h2>
      <input
        type="text"
        value={criteria}
        onChange={(e) => setCriteria(e.target.value)}
        placeholder="Enter search criteria..."
        className="search__input"
      />
      <button onClick={handleSearch} className="search__button">Search</button>
      <ul className="search__list">
        {searchResults.map((result, index) => (
          <li key={index} className="search__item">
            {result.name} - {result.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalizedSearch;

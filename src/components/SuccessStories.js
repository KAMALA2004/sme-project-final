import React from 'react';
import { Link } from 'react-router-dom';
import './SuccessStories.css';
import { successStories } from '../data/successStories';

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <h2>Success Stories and Case Studies</h2>
      <div className="stories-grid">
        {successStories.map(story => (
          <div key={story.id} className="story-card">
            <Link to={`/success-story/${story.id}`}>
              <img src={story.image} alt={story.companyName} className="story-image" />
              <h3>{story.companyName}</h3>
            </Link>
            <p><strong>Founder:</strong> {story.founder}</p>
            <p>{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;

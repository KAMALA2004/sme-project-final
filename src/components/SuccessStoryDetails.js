import React from 'react';
import { useParams } from 'react-router-dom';
import { successStories } from '../data/successStories';
import './SuccessStoryDetails.css'; // Ensure this is imported

const SuccessStoryDetails = () => {
  const { storyId } = useParams();
  const story = successStories.find(s => s.id === parseInt(storyId));

  if (!story) {
    return <p>Story not found!</p>;
  }

  return (
    <section className="success-story-details">
      <img src={story.image} alt={story.companyName} className="success-story-image" />
      <div className="success-story-text">
        <h2>{story.companyName}</h2>
        <p><strong>Founder:</strong> {story.founder}</p>
        <p><strong>Origin:</strong> {story.origin}</p>
        <p><strong>Struggles:</strong> {story.struggles}</p>
        <p><strong>Investment Amount:</strong> {story.investmentAmount}</p>
        <p><strong>Revenue:</strong> {story.revenue}</p>
        <p><strong>Net Profit:</strong> {story.netProfit}</p>
        <p><strong>Employees:</strong> {story.employees}</p>
        <p><strong>Domain:</strong> {story.domain}</p>
      </div>
    </section>
  );
};

export default SuccessStoryDetails;
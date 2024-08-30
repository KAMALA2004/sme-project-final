import React from 'react';
import './HomePage.css'; // Ensure this file exists for custom styling

const HomePage = () => {
  return (
    <div className="home">
      <img 
        src="https://img.freepik.com/premium-vector/woman-sitting-front-store-typing-laptop-man-woman-sitting-book-simple-minimalist-flat-vector-illustration_538213-51842.jpg" 
        alt="Home Banner" 
        className="home-banner" 
      />
      <h1>Welcome to Our Site</h1>
      <p>Explore our services and offerings.</p>

      <div className="info-section">
        <div className="info-text">
          <h2>Accessible Loans and Available Schemes</h2>
          <p>We provide detailed information about various loans and schemes that are accessible to SMEs. Our aim is to help you find the best financial solutions for your business needs.</p>
        </div>
        <img 
          src="https://media.istockphoto.com/id/1145371340/photo/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-cash-and-pen-to-the.jpg?s=612x612&w=0&k=20&c=gEL2GiGxVAWIg6zd73afHWjVE37cNEBww49DE45jwiI=" 
          alt="Accessible Loans" 
          className="info-image" 
        />
      </div>

      <div className="info-section">
        <img 
          src="https://img.freepik.com/free-photo/meeting-mature-office-showing-presenter_1262-2083.jpg" 
          alt="Contact Investors" 
          className="info-image" 
        />
        <div className="info-text">
          <h2>Contact Investors and Pitch Ideas</h2>
          <p>We connect SMEs with investors who are looking for new opportunities. Our platform provides you with the resources to pitch your ideas effectively and secure funding.</p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-text">
          <h2>AI Chatbot Assistant</h2>
          <p>Our AI chatbot is here to help you clarify your doubts, identify gaps in your strategies, and assist with pitching ideas. Get real-time assistance tailored to your business needs.</p>
        </div>
        <img 
          src="https://www.shutterstock.com/image-vector/chatbot-using-chatting-artificial-intelligence-600nw-2258695375.jpg" 
          alt="AI Chatbot" 
          className="info-image" 
        />
      </div>

      <div className="info-section">
        <img 
          src="https://smepayroll.com/blog/wp-content/uploads/2023/08/3.png" 
          alt="Personalized Search Tool" 
          className="info-image" 
        />
        <div className="info-text">
          <h2>Personalized Search Tool</h2>
          <p>Our personalized search tool helps you find resources and information tailored to your specific business criteria. Save time and find exactly what you need to grow your SME.</p>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
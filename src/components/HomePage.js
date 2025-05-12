import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Empowering SMEs with <span className="highlight">Smart Solutions</span></h1>
          <p className="hero-subtitle">Discover financial opportunities, investor connections, and AI-powered assistance tailored for your business</p>
          <button className="cta-button">Explore Services</button>
        </div>
        <img 
          src="https://img.freepik.com/premium-vector/woman-sitting-front-store-typing-laptop-man-woman-sitting-book-simple-minimalist-flat-vector-illustration_538213-51842.jpg" 
          alt="Business Collaboration" 
          className="hero-image" 
        />
      </div>

      {/* Features Grid */}
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">💸</div>
          <h3>Accessible Loans</h3>
          <p>Tailored financial solutions for your business growth</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h3>Investor Network</h3>
          <p>Connect with potential investors for your venture</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Assistant</h3>
          <p>24/7 support for your business queries</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h3>Smart Search</h3>
          <p>Find exactly what your business needs</p>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="section-container">
        <div className="info-section image-left">
          <div className="image-wrapper">
            <img 
              src="https://media.istockphoto.com/id/1145371340/photo/partner-has-made-a-fraud-in-the-contract-of-sale-and-being-handed-a-cash-and-pen-to-the.jpg?s=612x612&w=0&k=20&c=gEL2GiGxVAWIg6zd73afHWjVE37cNEBww49DE45jwiI=" 
              alt="Accessible Loans" 
              className="info-image" 
            />
          </div>
          <div className="info-text">
            <h2>Accessible Loans and Available Schemes</h2>
            <p>We provide detailed information about various loans and schemes that are accessible to SMEs. Our aim is to help you find the best financial solutions for your business needs.</p>
            <button className="section-button">Learn More</button>
          </div>
        </div>

        <div className="info-section">
          <div className="image-wrapper">
            <img 
              src="https://img.freepik.com/free-photo/meeting-mature-office-showing-presenter_1262-2083.jpg" 
              alt="Contact Investors" 
              className="info-image" 
            />
          </div>
          <div className="info-text">
            <h2>Connect with Investors</h2>
            <p>We connect SMEs with investors who are looking for new opportunities. Our platform provides you with the resources to pitch your ideas effectively and secure funding.</p>
            <button className="section-button">Find Investors</button>
          </div>
        </div>

        <div className="info-section image-left">
          <div className="image-wrapper">
            <img 
              src="https://www.shutterstock.com/image-vector/chatbot-using-chatting-artificial-intelligence-600nw-2258695375.jpg" 
              alt="AI Chatbot" 
              className="info-image" 
            />
          </div>
          <div className="info-text">
            <h2>AI-Powered Business Assistant</h2>
            <p>Our AI chatbot is here to help you clarify your doubts, identify gaps in your strategies, and assist with pitching ideas. Get real-time assistance tailored to your business needs.</p>
            <button className="section-button">Try Chatbot</button>
          </div>
        </div>

        <div className="info-section">
          <div className="image-wrapper">
            <img 
              src="https://smepayroll.com/blog/wp-content/uploads/2023/08/3.png" 
              alt="Personalized Search Tool" 
              className="info-image" 
            />
          </div>
          <div className="info-text">
            <h2>Smart Search Tool</h2>
            <p>Our personalized search tool helps you find resources and information tailored to your specific business criteria. Save time and find exactly what you need to grow your SME.</p>
            <button className="section-button">Start Searching</button>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Grow Your Business?</h2>
        <p>Join hundreds of SMEs who have found success with our platform</p>
        <button className="cta-button">Get Started Today</button>
      </div>
    </div>
  );
};

export default HomePage;
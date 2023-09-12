import React from 'react';
import './Heropage.css'; // Import your CSS file

const HeroPage = () => {
  return (
    <div className="hero-container">
      <h1 className="hero-title">
        <span className="alice-text">Welcome To</span>
        <br />
        <span className="hero-legal-ease">Legal Ease</span>
      </h1>
      <p className="hero-subtitle">
        <span className="alice-text">An AI-Powered Legal Document Assistant</span>
      </p>
      <button className="get-started-button">Get Started</button>
    </div>
  );
};

export default HeroPage;


import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about-card">
        
        <img
          src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" // Replace with your image URL
          alt="About Card 1"
          className="card-image"
        />
        <div className ="card-header">
        <h2>About Our Website</h2>
        </div>
        <p>We simplify legal documentation. Our platform lets you create, customize, and understand legal agreements easily. With AI-driven document generation and expert advice, we make law accessible.</p>
  
      </div>
      <div className="about-card">
      
        <img
          src="https://www.ilovepdf.com/storage/blog/226-1684403944-How-to-summarize-and-extract-text-from-PDF-with-AI-.png" // Replace with your image URL
          alt="About Card 2"
          className="card-image"
        />
        <div className ="card-header">
        <h2>Our Mission</h2>
        </div>
        <p>To revolutionize legal document creation, making it user-friendly and accurate. Bridging the gap between complexity and simplicity for all.</p>
        
      </div>
      <div className="about-card">
      
        <img
          src="https://www.thebluediamondgallery.com/legal/images/legal.jpg" // Replace with your image URL
          alt="About Card 3"
          className="card-image"
        />
        <div className ="card-header">
        <h2>Contact Us</h2>
        </div>
        <p>Got questions? We're here to help. Reach out for personalized legal guidance and simplified solutions.</p>
        
      </div>
    </div>
  );
};

export default AboutSection;

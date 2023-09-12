import React from 'react';
import './HowItWorks.css'; // Import your CSS file

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <header className="header">
        <h1 className="website-name">LegalEase</h1>
        <p className="website-description">Your Legal Solutions Made Easy</p>
      </header>

      <div className="grid-container">
        <div className="grid">
          <div className="step">
            <div className="circle">1</div>
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/128/888/888034.png" alt="Go to Website" />
              <h3>Go to Website</h3>
              <p>Visit our website to get started.</p>
            </div>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/512/6591/6591195.png" alt="Drag and Drop Documents" />
              <h3>Drag and Drop Documents</h3>
              <p>Simply drag and drop your documents into the website.</p>
            </div>
          </div>

          <div className="step">
            <div className="circle">3</div>
            <div className="card">
              <img src="https://cdn-icons-png.flaticon.com/128/159/159626.png" alt="Upload Button" />
              <h3>Upload Button</h3>
              <p>Click the upload button to add your files.</p>
            </div>
          </div>
        </div>
        <div className="dotted-line"></div>
      </div>

      <div className="processing">
        <div className="circle circle-short">4</div>
        <div className="processing-icon"></div>
        <h3>Processing</h3>
        <p>Your documents are being processed.</p>
      </div>
    </section>
  );
};

export default HowItWorks;


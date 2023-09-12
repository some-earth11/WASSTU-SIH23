import React from 'react';
import './Testimonial.css'; // Import your CSS file

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        <div className="testimonial">
          <div className="profile-pic">
            <img src="profile1.jpg" alt="User 1" />
          </div>
          <p className="comment">"When LegalEase approached me and asked me to try out the AI Summarizer, I tested it with some recent legal documents. I was amazed by the accuracy of the results and the ease of use."</p>
        </div>

        <div className="testimonial">
          <div className="profile-pic">
            <img src="profile2.jpg" alt="User 2" />
          </div>
          <p className="comment">"LegalEase is a time-saving tool that leverages technology efficiently and offers ease of use. It provides a comprehensive summary of judgments, enhancing understanding—an exciting advancement in legaltech."</p>
        </div>

        <div className="testimonial">
          <div className="profile-pic">
            <img src="profile3.jpg" alt="User 3" />
          </div>
          <p className="comment">"Terrific product! I wish I had this during my litigation days; it would have saved me hours on lengthy decisions."</p>
        </div>

        {/* Repeat similar structure for more testimonials */}
      </div>
    </section>
  );
};

export default Testimonial;

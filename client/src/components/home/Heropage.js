import React from 'react'
import './Heropage.css'

function Heropage() {
    return (
        <div className="container">
      <div className="content">
        <h3 className='h'>Welcome to</h3>
        <p className="title">Legal<span className="title-tale">Ease</span></p>
        <p className="description">
        An AI-Powered Legal Documentation Assistant
          
          
        </p>
        <button className="cta-button">Get Started</button>
      </div>
      {/* <div className="image-container">
        <img
          src="https://via.placeholder.com/400x400" // Replace with your image URL
          alt="Sample"
          className="image"
        />
      </div> */}
    </div>
    )
}

export default Heropage

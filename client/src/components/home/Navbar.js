import React from 'react';
import './Navbar.css'; // Import your CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">LegalEase</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/our ">Our Team</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

// Navbar.js
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a className="logo">
        <span className="logo-icon">🚀</span> My Fancy App
      </a>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  );
}

export default Navbar;



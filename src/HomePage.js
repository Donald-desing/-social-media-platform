// src/HomePage.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
      <h1>Welcome to the Social Media Platform</h1>
      <p>Connect with friends, share your thoughts, and discover new communities.</p> {/* Added description */}
      {/* <img src="/path/to/your/image.jpg" alt="Social Media Platform" />  Example image */}
      <NavLink to="/register">Register</NavLink>
      <br />
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default HomePage;

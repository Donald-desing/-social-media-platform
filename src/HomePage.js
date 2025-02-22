// src/HomePage.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Social Media Platform</h1>
      <NavLink to="/register">Register</NavLink>
      <br />
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}

export default HomePage;

// src/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Social Media Platform</h1>
      <Link to="/register">Register</Link>
      <br />
      <Link to="/login">Login</Link>
    </div>
  );
}

export default HomePage;

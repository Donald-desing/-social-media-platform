// src/Logout.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error('Error signing out:', error);
      alert("Error signing out. Please try again."); // Or a better error message
    }
  };

  return (
    <div className="logout-container">
      <h1>Logout</h1>
      <p>Are you sure you want to logout?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;

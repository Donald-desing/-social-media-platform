// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { signOut } from 'firebase/auth'; // Import signOut
import { auth } from './firebaseConfig'; // Import your Firebase auth instance

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignOut = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      navigate('/login'); // Redirect to login page after successful sign-out
      console.log('User signed out successfully'); // Log success message
    } catch (error) {
      console.error('Error signing out:', error); // Log any errors
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      {/* Add your dashboard content here */}
      {/* Example: Display user information */}
      {/* <p>User Email: {auth.currentUser?.email}</p> */}

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;

// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Or wherever you want to redirect after logout
      console.log('User signed out successfully.');
    } catch (error) {
      console.error('Error signing out:', error);
      // Display an error message to the user (optional)
      alert("Error signing out. Please try again."); // Example using alert
    }
  };

  return (
    <div className="dashboard-container"> {/* Add a class for styling */}
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>

      {/* Add more dashboard content here */}
      {/* Example: Display user info */}
      {auth.currentUser && ( // Conditionally render user info
        <div>
          <p>User Email: {auth.currentUser.email}</p>
          {/* Add other user details */}
        </div>
      )}

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;

// src/Profile.js
import React from 'react';
import { auth } from './firebaseConfig'; // Import your Firebase auth instance

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      {user ? (
        <div>
          <p><strong>Display Name:</strong> {user.displayName || "Not set"}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>User ID:</strong> {user.uid}</p>
          {/* Add other profile information as needed */}
          {/* Example: Photo URL */}
          {user.photoURL && (
            <img src={user.photoURL} alt="Profile Picture" className="profile-picture" />
          )}
        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}
    </div>
  );
};

export default Profile;

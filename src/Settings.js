// src/Settings.js
import React, { useState } from 'react';
import { updateProfile } from "firebase/auth";
import { auth } from './firebaseConfig';

const Settings = () => {
    const [displayName, setDisplayName] = useState(auth.currentUser?.displayName || ""); // Initialize with current name or empty string

    const handleUpdateProfile = async () => {
        try {
            await updateProfile(auth.currentUser, {
                displayName: displayName,
                // Add other profile updates as needed (photoURL, etc.)
            });
            alert("Profile updated successfully!"); // Or a better notification
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("Error updating profile. Please try again."); // Or a better error message
        }
    };

    return (
        <div className="settings-container">
            <h1>Settings</h1>

            <label htmlFor="displayName">Display Name:</label>
            <input
                type="text"
                id="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
            />

            {/* Add other settings inputs as needed */}

            <button onClick={handleUpdateProfile}>Update Profile</button>
        </div>
    );
};


export default Settings;

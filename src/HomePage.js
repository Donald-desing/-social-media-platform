import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import './HomePage.css'; // Import your CSS

function HomePage() {
  const user = auth.currentUser;
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard'); // Redirect if logged in
    }
  }, [user, navigate]);


  return (
    <div className="home-page-container">
        <h1>Welcome to the Social Media Platform</h1>
        <p>Connect with friends, share your thoughts, and discover new communities.</p>
        {!user && ( // Conditionally render links if NOT logged in
            <>
                <NavLink to="/register" className="cta-button">Register</NavLink> {/* Styled button */}
                <NavLink to="/login" className="cta-button">Login</NavLink>    {/* Styled button */}
            </>
        )}
    </div>
);
}

export default HomePage;

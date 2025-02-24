import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';
import Register from './Register';
import Login from './Login';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import Profile from './Profile'; // Import Profile
import Settings from './Settings'; // Import Settings
import Logout from './Logout';   // Import Logout

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />

            {/* Redirect logged-in users from /register and /login */}
            <Route path="/register" element={<Navigate to="/" replace />} /> {/* Added replace */}
            <Route path="/login" element={<Navigate to="/" replace />} />    {/* Added replace */}
          </>
        ) : (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;

import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initial authentication state

  // Simulate fetching user authentication status from backend (replace with your logic)
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Simulate API call to check authentication token or session
        const response = await fetch('/api/auth/check'); // Replace with your API endpoint
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated); // Update state based on response
      } catch (error) {
        console.error('Error checking authentication:', error);
      }
    };

    checkAuth();
  }, []);

  const value = { isAuthenticated, setIsAuthenticated };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

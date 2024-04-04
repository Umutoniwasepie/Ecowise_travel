import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './AuthContext'; // Replace with your AuthContext path

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />; // Redirect to login on unauthorized access
  }

  return <Outlet />; // Render the protected component if authenticated
};

export default ProtectedRoute;

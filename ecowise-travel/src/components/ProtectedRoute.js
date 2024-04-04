import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// Import both AuthContext and AuthProvider (or whichever you need)
import { AuthContext } from './AuthContext'; // Assuming AuthContext is exported

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />; // Redirect to login on unauthorized access
  }

  return <Outlet />; // Render the protected component if authenticated
};

export default ProtectedRoute;

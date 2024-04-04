// PrivateRoute.js
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token } = useAuth();
  const history = useHistory();

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : history.push('/signin')
      }
    />
  );
};

export default PrivateRoute;

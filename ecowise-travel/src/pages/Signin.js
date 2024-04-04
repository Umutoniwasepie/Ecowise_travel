// SignIn.js
import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom'; // Import Redirect from react-router-dom
import './AuthStyles.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setredirectToHome] = useState(false); // State to manage redirection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle sign-in logic (e.g., call API to authenticate)
    // After successful login, set redirectToHome to true
    setredirectToHome(true);
  };

  if (redirectToHome) {
    // If redirectToHome is true, redirect to home page
    return <redirect to="/" />;
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">Sign In</h1>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="auth-input"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="auth-input"
          required
        />
        <button type="submit" className="auth-button">
          Sign In
        </button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;

import React, { useState } from 'react';
import { Link, redirect } from 'react-router-dom'; // Import Redirect from react-router-dom
import './AuthStyles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToHome, setRedirectToHome] = useState(false); // State to manage redirection
  const [error, setError] = useState(null); // State to handle errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        mode: 'no-cors',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: name, email, password }), // Pass username, email, and password to backend
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      // If registration is successful, set redirectToHome to true
      setRedirectToHome(true);
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Registration failed'); // Set error message for registration failure
    }
  };

  if (redirectToHome) {
    // If redirectToHome is true, redirect to home page
    return <redirect to="/" />;
  }

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h1 className="auth-title">Sign Up</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="auth-input"
          required
        />
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
        {error && <p className="auth-error">{error}</p>} {/* Display error message if exists */}
        <button type="submit" className="auth-button">
          Sign Up
        </button>
        <p>
          Already have an account? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

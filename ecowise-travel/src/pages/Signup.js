// SignUp.js
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './AuthStyles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/users/register', { name, email, password });
      console.log('Registration response:', res.data);
      // Redirect to homepage after successful registration
      history.push('/homepage');
    } catch (err) {
      console.error('Error registering user:', err.response?.data?.message || 'An error occurred during registration');
      // Display error message to the user
      alert(err.response?.data?.message || 'An error occurred during registration');
    }
  };

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

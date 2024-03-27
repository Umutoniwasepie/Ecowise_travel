// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">EcoWise Travel</Link>
      </div>
      <div className="nav-links">
        <Link to="/adventures" className="nav-link">Adventures</Link>
        <Link to="/impact-calculator" className="nav-link">Impact Calculator</Link>
        <Link to="/travel-tips" className="nav-link">Travel Tips</Link>
        <Link to="/community-forum" className="nav-link">Community Forum</Link>
        <Link to="/reviews" className="nav-link">Review</Link>
        <Link to="/Signin" className="nav-link">Sign in</Link>
        <Link to="/Signup" className="nav-link">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;

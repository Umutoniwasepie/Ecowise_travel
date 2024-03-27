import React from 'react';
import { Link } from 'react-router-dom';
import logo from './ecowise-logo.png'; // Import logo image

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="EcoWise Travel" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/adventures" className="nav-link">Adventures</Link>
        <Link to="/impact-calculator" className="nav-link">Impact Calculator</Link>
        <Link to="/travel-tips" className="nav-link">Travel Tips</Link>
        <Link to="/community-forum" className="nav-link">Community Forum</Link>
        <Link to="/reviews" className="nav-link">Review</Link>
        <Link to="/signin" className="nav-link">Sign in</Link>
        <Link to="/signup" className="nav-link">Sign up</Link>
      </div>
    </nav>
  );
}

export default Navbar;

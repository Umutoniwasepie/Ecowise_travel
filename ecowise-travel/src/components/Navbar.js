import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src="./ecowise-logo.png" alt="EcoWise Travel Logo" /> {/* Assuming logo.png is in the same directory */}
          <span className="ecowise-title">EcoWise Travel</span> {/* Green title without underline */}
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/adventures" className="nav-link">Adventures</Link>
        <Link to="/impact-calculator" className="nav-link">Impact Calculator</Link>
        <Link to="/travel-tips" className="nav-link">Travel Tips</Link>
        <Link to="/community-forum" className="nav-link">Community Forum</Link>
        <Link to="/reviews" className="nav-link">Reviews</Link>
        <Link to="/signin" className="nav-link">Sign In</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

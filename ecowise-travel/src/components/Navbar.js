import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/search" className="nav-link">Adventure Search</Link>
      <Link to="/reviews" className="nav-link">Reviews</Link>
      {/* Add links for other pages */}
      <Link to="/travel-tips" className="nav-link">Travel Tips</Link>
      <Link to="/adventures" className="nav-link">Adventures</Link>
      <Link to="/community-forum" className="nav-link">Community Forum</Link>
      <Link to="/impact-calculator" className="nav-link">Impact Calculator</Link>
    </nav>
  );
};

export default Navbar;

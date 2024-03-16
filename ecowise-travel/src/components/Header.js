import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="ecowise-logo.png" alt="EcoWise Travel Logo" />
      </div>
      <nav>
        <button className="menu-button">
          <span>&#xE5D2;</span> {/* Unicode for the menu icon */}
        </button>
        {/* Navigation links */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adventures">Adventures</Link></li>
          <li><Link to="/travel-tips">Travel Tips</Link></li>
          <li><Link to="/community-forum">Community Forum</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

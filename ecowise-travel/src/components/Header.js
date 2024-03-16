import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon'; // Import the HamburgerIcon component
import './HamburgerIcon.css'; // Import the header styles 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="ecowise-logo.png" alt="EcoWise Travel Logo" />
      </div>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        {/* Navigation links */}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adventures">Adventures</Link></li>
          <li><Link to="/travel-tips">Travel Tips</Link></li>
          <li><Link to="/community-forum">Community Forum</Link></li>
        </ul>
      </nav>
      {/* Hamburger icon */}
      <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;

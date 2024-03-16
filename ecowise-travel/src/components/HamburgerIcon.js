// HamburgerIcon.js

import React from 'react';
import './HamburgerIcon.css';

const HamburgerIcon = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`hamburger-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default HamburgerIcon;

// HamburgerIcon.js
import React from 'react';

const HamburgerIcon = ({ onClick }) => (
  <div className="hamburger-icon" onClick={onClick}>
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

export default HamburgerIcon;


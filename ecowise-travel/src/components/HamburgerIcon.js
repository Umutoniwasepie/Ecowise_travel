// HamburgerIcon.js

import React from 'react';

const HamburgerIcon = ({ isOpen, onClick }) => {
  const barStyle = {
    width: '25px',
    height: '3px',
    backgroundColor: '#333',
    margin: '5px 0',
    transition: '0.4s',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: '24px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle} onClick={onClick}>
      <div style={{ ...barStyle, transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none' }}></div>
      <div style={{ ...barStyle, opacity: isOpen ? '0' : '1', transitionDelay: isOpen ? '0' : '0.2s' }}></div>
      <div style={{ ...barStyle, transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none' }}></div>
    </div>
  );
};

export default HamburgerIcon;

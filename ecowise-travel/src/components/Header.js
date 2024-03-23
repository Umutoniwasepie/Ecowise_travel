import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="homepage-container">
        <div className="logo">
          <img src="ecowise-logo.png" alt="EcoWise Travel Logo" />
        </div>
        {A conscious travel for change making people}
        <h1>EcoWise Travel</h1>
        <nav>
          {/* Navigation links can go here */}
        </nav>
      </div>
    </header>
  );
};

export default Header;

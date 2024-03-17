import React from 'react';

const Header = () => {
  return (
    <header>
     <div className="homepage-container">
            {/* Header */}
            <header className="header">
                <div className="logo">
                    <img src="ecowise-logo.png" alt="EcoWise Travel Logo" />
                </div>
     </div>
      {/* Header content goes here */}
      <h1>EcoWise Travel</h1>
      <nav>
        {/* Navigation links can go here */}
      </nav>
    </header>
  );
};

export default Header;

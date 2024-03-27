import React, { useState } from 'react';
import './Traveltips.css';

const TravelTips = () => {
  const [selectedTip, setSelectedTip] = useState(null);

  // Sample travel tips data
  const travelTips = [
    'Pack light and only bring the essentials.',
    'Research local customs and traditions before traveling.',
    'Stay hydrated and eat healthily while on the road.',
    'Always carry a reusable water bottle and refill it whenever possible.',
    'Book eco-friendly accommodations and support sustainable tourism.'
  ];

  const handleTipHover = (index) => {
    setSelectedTip(index);
  };

  return (
    <div className="travel-tips-container">
      <h1 className="title">Travel Tips</h1>
      <ul className="tips-list">
        {travelTips.map((tip, index) => (
          <li 
            key={index} 
            className={`tip ${selectedTip === index ? 'selected' : ''}`} 
            onMouseEnter={() => handleTipHover(index)} 
            onMouseLeave={() => handleTipHover(null)}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TravelTips;

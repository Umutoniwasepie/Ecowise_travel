import React, { useState } from 'react';
import './Traveltips.css';

const TravelTips = () => {
  // Sample travel tips data
  const travelTips = [
    'Pack light and only bring the essentials.',
    'Research local customs and traditions before traveling.',
    'Stay hydrated and eat healthily while on the road.',
    'Always carry a reusable water bottle and refill it whenever possible.',
    'Book eco-friendly accommodations and support sustainable tourism.',
  ];

  const [activeTipIndex, setActiveTipIndex] = useState(null);

  const handleTipHover = (index) => {
    setActiveTipIndex(index);
  };

  const handleTipLeave = () => {
    setActiveTipIndex(null);
  };

  return (
    <div>
      <div className="travel-tips">
        <h1 className="tips-title">Travel Tips</h1>
        <ul className="tips-list">
          {travelTips.map((tip, index) => (
            <li
              key={index}
              className={`tip ${activeTipIndex === index ? 'active' : ''}`}
              onMouseEnter={() => handleTipHover(index)}
              onMouseLeave={handleTipLeave}
            >
              {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TravelTips;

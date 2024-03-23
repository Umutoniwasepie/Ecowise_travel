import React from 'react';
import { Link } from 'react-router-dom';

const TravelTips = () => {
  // Sample travel tips data
  const travelTips = [
    'Pack light and only bring the essentials.',
    'Research local customs and traditions before traveling.',
    'Stay hydrated and eat healthily while on the road.',
    'Always carry a reusable water bottle and refill it whenever possible.',
    'Book eco-friendly accommodations and support sustainable tourism.'
  ];

  return (
     <div>
        <nav style={styles.navigation}>
          <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/adventures">Adventures</Link></li>
            <li><Link to="/impact-calculator">Impact Calculator</Link></li>
            <li><Link to="/community-forum">Community Forum</Link></li>
          </ul>
        </nav>
  
    <div style={styles.container}>
      <h1 style={styles.title}>Travel Tips</h1>
      <ul style={styles.tipsList}>
        {travelTips.map((tip, index) => (
          <li key={index} style={styles.tip}>{tip}</li>
        ))}
      </ul>
    </div>
   </div>

  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  tipsList: {
    listStyleType: 'none',
    padding: 0,
  },
  tip: {
    fontSize: '16px',
    marginBottom: '10px',
  }
};

export default TravelTips;

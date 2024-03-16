import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ImpactCalculator = () => {
  const [tripDetails, setTripDetails] = useState({
    distance: 0,
    transportationMode: '',
    accommodationType: '',
    travelers: 1,
  });
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const calculateCarbonFootprint = () => {
    const { distance, transportationMode, accommodationType, travelers } = tripDetails;
    let carbonFootprint = distance * 0.1; // Base calculation
    
    // Adjust carbon footprint based on transportation mode and accommodation type
    if (transportationMode === 'car') {
      carbonFootprint *= 1.2; // Increase carbon footprint for car travel
    } else if (transportationMode === 'train') {
      carbonFootprint *= 0.8; // Decrease carbon footprint for train travel
    }

    if (accommodationType === 'hotel') {
      carbonFootprint *= 1.5; // Increase carbon footprint for hotel accommodation
    } else if (accommodationType === 'camping') {
      carbonFootprint *= 0.7; // Decrease carbon footprint for camping accommodation
    }

    // Adjust carbon footprint based on number of travelers
    carbonFootprint *= travelers;

    setCarbonFootprint(carbonFootprint);
  };

  return (
     <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <img src="ecowise-logo.png" alt="EcoWise Travel" />
        </div>
        <nav style={styles.navigation}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/adventures">Adventures</Link></li>
            <li><Link to="/travel-tips">Travel Tips</Link></li>
            <li><Link to="/community-forum">Community Forum</Link></li>
          </ul>
        </nav>
      </header>
  
    <div style={styles.container}>
      <h1 style={styles.title}>Impact Calculator</h1>
      <div>
        <label>Distance (km):</label>
        <input type="number" name="distance" value={tripDetails.distance} onChange={handleInputChange} />
      </div>
      <div>
        <label>Transportation Mode:</label>
        <input type="text" name="transportationMode" value={tripDetails.transportationMode} onChange={handleInputChange} />
      </div>
      <div>
        <label>Accommodation Type:</label>
        <input type="text" name="accommodationType" value={tripDetails.accommodationType} onChange={handleInputChange} />
      </div>
      <div>
        <label>Number of Travelers:</label>
        <input type="number" name="travelers" value={tripDetails.travelers} onChange={handleInputChange} />
      </div>
      <button onClick={calculateCarbonFootprint}>Calculate</button>
      {carbonFootprint > 0 && <p>Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2</p>}
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
};

export default ImpactCalculator;

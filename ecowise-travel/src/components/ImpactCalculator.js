import React, { useState } from 'react';

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
    // Perform calculation based on trip details (sample calculation)
    const { distance, transportationMode, accommodationType, travelers } = tripDetails;
    const carbonFootprint = distance * 0.1; // Sample calculation
    setCarbonFootprint(carbonFootprint);
  };

  return (
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
      {carbonFootprint > 0 && <p>Carbon Footprint: {carbonFootprint} kg CO2</p>}
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

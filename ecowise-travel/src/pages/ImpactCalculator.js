import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests

const ImpactCalculator = () => {
  const [tripDetails, setTripDetails] = useState({
    consumption: 0,
    location: '',
  });
  const [carbonFootprint, setCarbonFootprint] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const calculateCarbonFootprint = async () => {
    try {
      const response = await axios.post(
        'https://tracker-for-carbon-footprint-api.p.rapidapi.com/traditionalHydro',
        tripDetails,
        {
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'd9677418b2msh740d6cd4752d889p125e87jsn63f0305fadbb',
            'X-RapidAPI-Host': 'tracker-for-carbon-footprint-api.p.rapidapi.com',
          },
        }
      );
      
      console.log(response.data); 
      setCarbonFootprint(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Impact Calculator</h1>
      <div>
        <label htmlFor="consumption">Consumption:</label>
        <input
          type="number"
          id="consumption"
          name="consumption"
          value={tripDetails.consumption}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          id="location"
          name="location"
          value={tripDetails.location}
          onChange={handleInputChange}
        />
      </div>
      <button type="button" onClick={calculateCarbonFootprint}>
        Calculate
      </button>
      {carbonFootprint !== null && (
        <p>Carbon Footprint: {carbonFootprint.toFixed(2)} kg CO2</p>
      )}
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

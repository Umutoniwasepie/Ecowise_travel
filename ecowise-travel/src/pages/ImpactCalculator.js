import React, { useState } from 'react';
import './Impactcalculator.css'; // Import your CSS file for styling

const ImpactCalculator = () => {
  const [tripDetails, setTripDetails] = useState({
    distance: 0,
    transportationMode: '',
    accommodationType: '',
    travelers: 1,
  });
  const [carbonFootprint, setCarbonFootprint] = useState(0);
  const [isLoading, setIsLoading] = useState(false); // Track API call state
  const [errorMessage, setErrorMessage] = useState(null); // Store API error message

  // Replace with actual API key
  const apiKey = 'd9677418b2msh740d6cd4752d889p125e87jsn63f0305fadbb';

  // API URLs
  const apiUrlMap = {
    CarTravel: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromCarTravel',
    Flight: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromFlight',
    PublicTransit: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromPublicTransit',
    MotoBike: 'https://carbonfootprint1.p.rapidapi.com/CarbonFootprintFromMotorBike',
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTripDetails({ ...tripDetails, [name]: value });
  };

  const calculateCarbonFootprint = async () => {
    setIsLoading(true); // Set loading state
    setErrorMessage(null); // Clear previous errors

    const { distance, transportationMode, accommodationType, travelers } = tripDetails;

    try {
      if (!transportationMode) {
        throw new Error('Please select a transportation mode.');
      }

      const response = await fetch(apiUrlMap[transportationMode], {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'carbonfootprint1.p.rapidapi.com',
        },
        body: JSON.stringify({
          distance: Number(distance),
          passengers: Number(travelers),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate carbon footprint. Please try again later.');
      }

      const data = await response.json();
      setCarbonFootprint(data.carbon_footprint.toFixed(2));
    } catch (error) {
      setErrorMessage(error.message);
    }

    setIsLoading(false); // Clear loading state
  };

  return (
    <div className="impact-calculator">
      <h1 className="calculator-title">Travel Footprint Estimator</h1>
      <p className="calculator-description">
        Estimate the potential environmental impact of your trip by entering travel details.
        These are estimates based on averages and may not be fully accurate. Consider using
        eco-friendly travel options and supporting sustainable practices to reduce your
        environmental footprint.
      </p>
      <div className="input-container">
        <label htmlFor="distance">Travel Distance (km):</label>
        <input
          type="number"
          id="distance"
          name="distance"
          value={tripDetails.distance}
          onChange={handleInputChange}
        />
      </div>
      <div className="input-container">
        <label htmlFor="transportationMode">Transportation Mode:</label>
        <select
          id="transportationMode"
          name="transportationMode"
          value={tripDetails.transportationMode}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="CarTravel">Car</option>
          <option value="Flight">Flight</option>
          <option value="PublicTransit">Public Transit</option>
          <option value="MotoBike">Motorbike</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="accommodationType">Accommodation Type (Optional):</label>
        <select
          id="accommodationType"
          name="accommodationType"
          value={tripDetails.accommodationType}
          onChange={handleInputChange}
        >
          <option value="">Select</option>
          <option value="Hotel">Hotel</option>
          <option value="Airbnb">Eco-lodge</option>
          <option value="Camping">Hostel</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="travelers">Number of Travelers:</label>
        <input
          type="number"
          id="travelers"
          name="travelers"
          value={tripDetails.travelers}
          onChange={handleInputChange}
          min="1"
        />
      </div>
      <button type="button" onClick={calculateCarbonFootprint} disabled={isLoading}>
        {isLoading ? 'Calculating...' : 'Estimate Footprint'}
      </button>
      {carbonFootprint > 0 && (
        <div className="footprint-result">
          <p>Your estimated carbon footprint for this trip is: {carbonFootprint} kg CO2.</p>
          <p>
            Remember, this is an estimate. Consider exploring ways to reduce your impact,
            such as choosing eco-friendly transportation or sustainable accommodations.
          </p>
        </div>
      )}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default ImpactCalculator;

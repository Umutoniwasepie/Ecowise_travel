import React from 'react';
import { Link } from 'react-router-dom';

const AdventureSearchPage = () => {
  // Sample adventure data
  const adventures = [
    { id: 1, name: 'Adventure 1', location: 'Location 1', rating: 4.5 },
    { id: 2, name: 'Adventure 2', location: 'Location 2', rating: 4.0 },
    // Add more adventure data as needed
  ];

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
            <li><Link to="/impact-calculator">Impact Calculator</Link></li>
            <li><Link to="/travel-tips">Travel Tips</Link></li>
            <li><Link to="/community-forum">Community Forum</Link></li>
          </ul>
        </nav>
      </header>

      {/* Adventure Search Content */}
      <div style={styles.searchContainer}>
        <h1 style={styles.title}>Adventure Search</h1>
        {/* Add search bar and search results components here */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#336633',
  },
  navigation: {
    display: 'flex',
  },
  searchContainer: {
    marginTop: '20px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
};

export default AdventureSearchPage;

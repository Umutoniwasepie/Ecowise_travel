const express = require('express');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const userRoutes = require('./routes/userRoutes'); // Import user routes
// Import other routes as needed

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// PostgreSQL database connection configuration
const pool = new Pool({
  user: process.env.ecowise_admin,
  host: process.env.localhost,
  database: process.env.ecowise_travel,
  password: process.env.Ec0w!seP@ss,
  port: process.env.3000,
});

// Mount routes
app.use('/api/users', userRoutes);
// Mount other routes as needed

// Default route
app.get('/', (req, res) => {
  res.send('Hello from your Express server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

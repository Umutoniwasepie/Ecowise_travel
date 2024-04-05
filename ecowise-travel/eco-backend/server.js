require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models'); // Import Sequelize instance
const ecoTravelRoutes = require('./routes/ecoTravelRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Debug: Print JWT_SECRET value
console.log('JWT_SECRET:', process.env.JWT_SECRET);

// Middleware to parse incoming request bodies
app.use(express.json());

// Enable CORS for all origins
app.use(cors());

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to EcoWise Travel API!');
});

// Example user route
app.use('/api/users', require('./routes/userRoutes'));

// Example review route
app.use('/api/reviews', require('./routes/reviewRoutes'));

// Example routes...
app.use('/api/ecoTravel', ecoTravelRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

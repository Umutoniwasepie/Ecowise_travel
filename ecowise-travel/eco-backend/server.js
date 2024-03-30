const express = require('express');
const sequelize = require('./models/index').sequelize;

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse incoming request bodies
app.use(express.json());

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

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

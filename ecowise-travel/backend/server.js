// server.js

const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const sequelize = require('./config/database'); // Import Sequelize instance

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Mount routes
app.use('/api/users', userRoutes);
// Mount other routes as needed

// Default route
app.get('/', (req, res) => {
  res.send('Hello from your Express server!');
});

// Sync Sequelize models with the database
sequelize.sync()
  .then(() => {
    // Start the server after syncing models
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing Sequelize models:', error);
  });

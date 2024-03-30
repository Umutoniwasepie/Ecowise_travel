// server.js

const express = require('express');
const sequelize = require('./models/index').sequelize;

const app = express();
const PORT = process.env.PORT || 5000;

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database successfully');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

// Define routes and middleware here...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


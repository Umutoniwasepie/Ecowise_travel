// src/server.js
const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get('/', (req, res) => {
  res.send('Hello from EcoWise Travel backend!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


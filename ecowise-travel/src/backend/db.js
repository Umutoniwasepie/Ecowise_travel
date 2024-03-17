// src/backend/db.js

const mongoose = require('mongoose');

// MongoDB connection string
const MONGODB_URI = 'mongodb://localhost:27017/my_database';

// Connect to MongoDB
mongoose.connect(MONGODB_URI);

// Get the default connection
const db = mongoose.connection;

// Event listeners for MongoDB connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

// Export the Mongoose connection
module.exports = db;

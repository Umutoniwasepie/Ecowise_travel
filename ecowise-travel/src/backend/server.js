// src/server.js
const express = require('express');
require('dotenv').config();
const db = require('./src/backend/db'); // Import database connection
const userRoutes = require('./src/backend/routes/userRoutes'); // Import user routes
const postRoutes = require('./src/backend/routes/postRoutes'); // Import post routes
const commentRoutes = require('./src/backend/routes/commentRoutes'); // Import comment routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Ensure database connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
  // Routes
  app.use('/api/users', userRoutes); // Mount user routes under /api/users
  app.use('/api/posts', postRoutes); // Mount post routes under /api/posts
  app.use('/api/comments', commentRoutes); // Mount comment routes under /api/comments

  // Default route
  app.get('/', (req, res) => {
    res.send('Hello from EcoWise Travel backend!');
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Ensure server stops on database disconnection
db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
  process.exit(1); // Exit with failure code
});

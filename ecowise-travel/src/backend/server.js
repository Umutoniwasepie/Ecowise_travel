// src/server.js
const express = require('express');
require('dotenv').config();
const userRoutes = require('./src/routes/userRoutes'); // Import user routes
const postRoutes = require('./src/routes/postRoutes'); // Import post routes
const commentRoutes = require('./src/routes/commentRoutes'); // Import comment routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

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

// src/backend/server.js

const express = require('express');
require('dotenv').config();
const connectDB = require('./db'); // Import the connectDB function
const userRoutes = require('./src/routes/userRoutes');
const postRoutes = require('./src/routes/postRoutes');
const commentRoutes = require('./src/routes/commentRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB()
  .then(() => {
    // Routes
    app.use('/api/users', userRoutes);
    app.use('/api/posts', postRoutes);
    app.use('/api/comments', commentRoutes);

    // Default route
    app.get('/', (req, res) => {
      res.send('Hello from EcoWise Travel backend!');
    });

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with failure code
  });

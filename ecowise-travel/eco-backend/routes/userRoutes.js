// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { User } = require('../models'); // Import the User model

// Route to create a new user
router.post('/', async (req, res) => {
  try {
    // Extract user input from request body
    const { username, email, password } = req.body;

    // Create a new user record in the database
    const newUser = await User.create({
      username,
      email,
      password
    });

    // Send a success response with the created user object
    res.status(201).json(newUser);
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Failed to create user' });
  }
});

// Export the router
module.exports = router;

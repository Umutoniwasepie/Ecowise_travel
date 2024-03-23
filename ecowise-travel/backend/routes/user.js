const express = require('express');
const User = require('../models/User'); // Import User model

const router = express.Router();

// Route to register a new user (POST request)
router.post('/register', async (req, res) => {
  try {
    // Extract user data from request body
    const { username, email, password } = req.body;

    // Implement password hashing logic here (use a library like bcrypt)

    // Create a new user with hashed password
    const newUser = new User({ username, email, password });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
});

module.exports = router;


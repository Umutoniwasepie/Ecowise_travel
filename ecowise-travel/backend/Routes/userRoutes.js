// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');
const bcrypt = require('bcrypt'); // Already imported
const jwt = require('jsonwebtoken'); // New import

// Routes for User resource
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } }); // Find user by username
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password); // Compare passwords
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT on successful login
    const payload = { userId: user.id }; // Payload for the token
    const secret = process.env.JWT_SECRET; // Replace with your secret key (environment variable)
    const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Sign the token

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;


const User = require('../models/User');
const bcrypt = require('bcrypt'); // For password hashing

const UserController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await User.findAll();
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Get a user by ID
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id); // Use findByPk for finding by ID
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const { username, email, password } = req.body;
    try {
      // Hash password before saving
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      // Handle potential validation errors (e.g., email already exists)
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: 'Username or email already exists' });
      }
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    const id = req.params.id;
    const { username, email } = req.body;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      user.username = username;
      user.email = email;
      await user.save(); // Save updated user details

      res.json(user);
    } catch (error) {
      console.error(error);
      // Handle potential validation errors
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(400).json({ message: 'Username or email already exists' });
      }
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  },
};

module.exports = UserController;

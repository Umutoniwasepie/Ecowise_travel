// controllers/UserController.js

const pool = require('../config/database');

const UserController = {
  // Get all users
  getAllUsers: async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM users');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a user by ID
  getUserById: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Create a new user
  createUser: async (req, res) => {
    const { username, email } = req.body;
    try {
      const result = await pool.query('INSERT INTO users (username, email) VALUES ($1, $2) RETURNING *', [username, email]);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a user by ID
  updateUser: async (req, res) => {
    const id = req.params.id;
    const { username, email } = req.body;
    try {
      const result = await pool.query('UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *', [username, email, id]);
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json(result.rows[0]);
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a user by ID
  deleteUser: async (req, res) => {
    const id = req.params.id;
    try {
      const result = await pool.query('DELETE FROM users WHERE id = $1 RETURNING *', [id]);
      if (result.rows.length === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User deleted successfully' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = UserController;


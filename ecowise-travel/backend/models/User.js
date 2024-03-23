const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  // Define the fields of the users table
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true, // Ensure username is not empty
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true, // Validate email format
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    // You'll implement password hashing in UserController.createUser
  },
});

module.exports = User;

// config/database.js

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'postgres', // or 'mysql' | 'sqlite' | 'mssql'
  host: 'localhost',
});

module.exports = sequelize;


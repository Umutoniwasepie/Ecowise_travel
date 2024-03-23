// config/database.js

const { Sequelize } = require('sequelize');

// Initialize Sequelize instance
const sequelize = new Sequelize({
  dialect: 'postgres', // Specify the dialect
  host: 'localhost', // Specify the host of your PostgreSQL server
  port: 3000, // Specify the port of your PostgreSQL server (default is 5432)
  username: 'ecowise_admin', // Specify the username for accessing the database
  password: 'Ec0w!seP@ss', // Specify the password for accessing the database
  database: 'ecowise_travel', // Specify the name of your PostgreSQL database
});

module.exports = sequelize;

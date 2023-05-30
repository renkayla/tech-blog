// connection.js

const Sequelize = require('sequelize');

// Create a new Sequelize instance using the database credentials from the config file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME || 'tech_blog_db',
      process.env.DB_USERNAME || 'root',
      process.env.DB_PASSWORD || 'Cortez10!!',
      {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        port: 3306,
      }
    );

module.exports = sequelize;

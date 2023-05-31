// connection.js

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tech_blog_db', 'root', 'Cortez10!!', {
  // database configuration options
  dialect: 'mysql',
  logging: console.log, // Enable logging
});


export default sequelize;

// connection.js

import { Sequelize } from 'sequelize';


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
});


export default sequelize;

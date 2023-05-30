// Post.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
  {
    // Define the fields/columns for the Post model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    // Add other fields as per your requirements
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

// Comment.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
    // Define the fields/columns for the Comment model
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    modelName: 'comment',
  }
);

module.exports = Comment;

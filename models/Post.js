import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './User.js';

class Post extends Model {}

Post.init(
  {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'post',
  }
);

// Define the associations
Post.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

export default Post;

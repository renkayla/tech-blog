import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/connection.js';
import User from './User.js';
import Post from './Post.js';

class Comment extends Model {}

Comment.init(
  {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'post',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'comment',
  }
);

// Define the associations
Comment.belongsTo(User, {
  foreignKey: 'user_id',
  as: 'user',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  as: 'post',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  as: 'comments',
});

export default Comment;

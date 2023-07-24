// models/BlogPost.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  content: {
    type: DataTypes.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  imagePath: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  activationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  publicationDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Blog.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = Blog;

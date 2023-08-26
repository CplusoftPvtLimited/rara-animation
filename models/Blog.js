const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const RelatedBlog = require('./RelatedBlog');

const Blog = sequelize.define('Blog', {
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT,
  },
  fellow: {
    type: DataTypes.INTEGER, // Change the data type to INTEGER
  },
  associatedFellow: {
    type: DataTypes.INTEGER, // Change the data type to INTEGER
  },
  category: {
    type: DataTypes.TEXT,
  },
  region: {
    type: DataTypes.TEXT,
  },
  profile: {
    type: DataTypes.STRING,
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

module.exports = Blog;

// models/BlogPost.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
// const Profile = require('./Profile.js');


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

// Blog.belongsTo(Profile); 
// Profile.hasMany(Blog);

// Blog.belongsTo(Category, { foreignKey: 'categoryId' });
// Blog.belongsTo(Profile, { foreignKey: 'profileId' });

module.exports = Blog;

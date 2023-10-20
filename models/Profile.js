// models/BlogPost.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
// const Blog = require('./Blog');

const Profile = sequelize.define("Profile", {
  name: {
    type: DataTypes.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  nameEnglish: {
    type: DataTypes.STRING,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  tagLine: {
    type: DataTypes.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  thumbnailPath: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  imagePath: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  animatedImage: {
    type: DataTypes.STRING,
    validate: { notEmpty: true },
  },
  jobPost: {
    type: DataTypes.STRING,
    // allowNull: false
    //validate: { notEmpty: true }
  },
  profileDesc: {
    type: DataTypes.TEXT,
    // allowNull: false
    //validate: { notEmpty: true }
  },
  websiteUrl: {
    type: DataTypes.STRING,
    // allowNull: true
  },
  heading: {
    type: DataTypes.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  paragraph: {
    type: DataTypes.TEXT,
    // allowNull: false,
    // validate: {
    //   notEmpty: true,
    // },
  },
  featuredImage: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  clothAnimatedImage: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  firstGraphicImage: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  secondGraphicImage: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  graphic1: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  graphic2: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  graphic3: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  pictureSlider: {
    type: DataTypes.JSON,
    // allowNull: true,
  },
  facebookUrl: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  twitterUrl: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  ritsumeiUrl: {
    type: DataTypes.STRING,
    // allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Profile.hasMany(Blog);
// Blog.belongsTo(Profile);

module.exports = Profile;

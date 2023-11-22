const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Blog = sequelize.define("Blog", {
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
    type: DataTypes.INTEGER,
  },
  associatedFellow: {
    type: DataTypes.INTEGER,
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
  linkedinLink: {
    type: DataTypes.STRING,
  },
  mediumLink: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Blog;

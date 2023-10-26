const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Post = sequelize.define("Post", {
  organizationName: DataTypes.STRING,
  contact: DataTypes.STRING,
  email: DataTypes.STRING,
  number: DataTypes.STRING,
  message: DataTypes.TEXT,
});

module.exports = Post;

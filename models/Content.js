const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Content = sequelize.define("Content", {
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
  },
  school: {
    type: DataTypes.STRING,
  },
  focusArea: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  referenceLetter: {
    type: DataTypes.STRING,
  },
  resume: {
    type: DataTypes.STRING,
  },
  statement: {
    type: DataTypes.STRING,
  },
});

module.exports = Content;

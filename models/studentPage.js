const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Student = sequelize.define("Student", {
  about: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  aboutBottom: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  program: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  outline: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  targetAudience: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  recruitment: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Student;
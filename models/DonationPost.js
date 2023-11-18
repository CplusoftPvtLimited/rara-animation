const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const DonationPost = sequelize.define("DonationPost", {
  areaOfSupport: DataTypes.STRING,
  donationType: DataTypes.STRING,
  donation: DataTypes.INTEGER,
  organizationName: DataTypes.STRING,
  contact: DataTypes.STRING,
  email: DataTypes.STRING,
  number: DataTypes.STRING,
  message: DataTypes.TEXT,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = DonationPost;

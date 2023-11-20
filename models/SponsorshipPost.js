const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const SponsorshipPost = sequelize.define("SponsorshipPost", {
  organizationName: DataTypes.STRING,
  contact: DataTypes.STRING,
  email: DataTypes.STRING,
  number: DataTypes.STRING,
  message: DataTypes.TEXT,
  donation: DataTypes.INTEGER,
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = SponsorshipPost;

const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BankTransfer = sequelize.define('BankTransfer', {
  bankTransfer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Set default value to false
  },
});

module.exports = BankTransfer;

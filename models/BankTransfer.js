const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const BankTransfer = sequelize.define('BankTransfer', {
  bankTransfer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = BankTransfer;

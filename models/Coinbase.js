const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Coinbase = sequelize.define('Coinbase', {
  checkoutId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Set default value to false
  },
});

module.exports = Coinbase;

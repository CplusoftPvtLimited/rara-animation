const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Coinbase = sequelize.define('Coinbase', {
  checkoutId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Coinbase;

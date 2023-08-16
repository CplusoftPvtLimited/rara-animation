const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SecretKeys = sequelize.define('Key', {
  secretKey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientKey: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Set default value to false
  },
});

module.exports = SecretKeys;

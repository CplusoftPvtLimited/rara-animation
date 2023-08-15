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
});

module.exports = SecretKeys;

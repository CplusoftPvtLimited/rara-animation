const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Category = sequelize.define('Category', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Category };

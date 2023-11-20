const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Fellow = sequelize.define("Fellow", {
  paragraph1: {
    type: DataTypes.TEXT,
  },
  paragraph2: {
    type: DataTypes.TEXT,
  },
  imagePath: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  link: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Fellow;

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Profiles", "graphic1", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Profiles", "graphic2", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Profiles", "graphic3", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Profiles", "graphic1");
    await queryInterface.removeColumn("Profiles", "graphic2");
    await queryInterface.removeColumn("Profiles", "graphic3");
  },
};

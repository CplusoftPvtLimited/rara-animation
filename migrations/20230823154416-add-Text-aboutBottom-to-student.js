"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Students", "aboutBottom", {
      type: Sequelize.TEXT, // Adjust the type according to your needs
      allowNull: true, // Update this based on your requirements
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Students", "aboutBottom");
  },
};

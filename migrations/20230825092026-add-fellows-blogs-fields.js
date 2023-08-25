'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Homes', 'fellows', {
      type: Sequelize.JSON,
      allowNull: false,
    });

    await queryInterface.addColumn('Homes', 'blogs', {
      type: Sequelize.JSON,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Homes', 'fellows');
    await queryInterface.removeColumn('Homes', 'blogs');
  },
};

'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('profiles', 'clothAnimatedImage', {
      type: Sequelize.STRING,
      allowNull: true, // Change as needed
    });
    await queryInterface.addColumn('profiles', 'firstGraphicImage', {
      type: Sequelize.STRING,
      allowNull: true, // Change as needed
    });
    await queryInterface.addColumn('profiles', 'secondGraphicImage', {
      type: Sequelize.STRING,
      allowNull: true, // Change as needed
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('profiles', 'clothAnimatedImage');
    await queryInterface.removeColumn('profiles', 'firstGraphicImage');
    await queryInterface.removeColumn('profiles', 'secondGraphicImage');
  },
};

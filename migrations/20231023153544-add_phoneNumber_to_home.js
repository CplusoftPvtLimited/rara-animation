'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Homes', 'phoneNumber', {
      type: Sequelize.STRING,
      allowNull: true, // Update this based on your requirements
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Homes', 'phoneNumber');
  }
};

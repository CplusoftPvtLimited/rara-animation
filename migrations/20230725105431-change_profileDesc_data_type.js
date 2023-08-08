'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Profiles', 'profileDesc', {
      type: Sequelize.TEXT,
      allowNull: false, // Adjust this as per your requirement
    });
  },

  down: async (queryInterface, Sequelize) => {
    // If needed, define the logic to revert the migration (i.e., change back to varchar(255))
  }
};

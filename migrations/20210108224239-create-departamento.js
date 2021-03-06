'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('departamento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        allowNull: false,
        type: Sequelize.STRING(10)
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING(30)
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('departamento');
  }
};
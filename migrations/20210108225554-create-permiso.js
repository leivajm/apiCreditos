'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permiso', {
      permisoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      estadoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estado',
          key: 'estadoId'
        }
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('permiso');
  }
};
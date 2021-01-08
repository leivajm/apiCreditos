'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('municipio', {
      municipioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      departamentoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'departamento',
          key: 'departamentoId'
        }
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
    await queryInterface.dropTable('municipio');
  }
};
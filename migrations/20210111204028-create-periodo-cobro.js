'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('periodo_cobro', {
      periodoCobroId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING(200)
      },
      numeroCuotas: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      diasPago: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      estadoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estado',
          key: 'estadoId'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('periodo_cobro');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('pago', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creditoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'credito',
          key: 'id'
        },
      },
      monto: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      mora: {
        allowNull: true,
        type: Sequelize.DECIMAL(10,2)
      },
      saldo: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      observaciones: {
        allowNull: true,
        type: Sequelize.STRING(300)
      },
      estadoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estado',
          key: 'id'
        }
      },
      fechaHora: {
        allowNull: false,
        type: Sequelize.DATE
      },
      usuarioIdCreacion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      },
      fechaHoraUpdate: {
        allowNull: false,
        type: Sequelize.DATE
      },
      usuarioIdUpdate: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('pago');
  }
};
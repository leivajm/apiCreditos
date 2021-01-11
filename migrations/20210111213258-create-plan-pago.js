'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plan_pago', {
      planPagoId: {
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
          key: 'creditoId'
        }
      },
      numeroCuota: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      fechaCuota: {
        allowNull: false,
        type: Sequelize.DATE
      },
      monto: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2)
      },
      saldo: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2)
      },
      pagoId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'pago',
          key: 'pagoId'
        }
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
          key: 'estadoId'
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
          key: 'usuarioId'
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
          key: 'usuarioId'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plan_pago');
  }
};
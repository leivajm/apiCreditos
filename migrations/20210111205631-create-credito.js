'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('credito', {
      creditoId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'empresa',
          key: 'empresaId'
        }
      },
      rutaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ruta',
          key: 'rutaId'
        }
      },
      codigoTarjeta: {
        allowNull: false,
        type: Sequelize.STRING(25)
      },
      clienteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'persona',
          key: 'personaId'
        }
      },
      fechaCredito: {
        allowNull:false,
        type: Sequelize.DATE
      },
      montoCredito: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2)
      },
      totalAPagar: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2)
      },
      periodoCobroId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'periodo_cobro',
          key: 'periodoCobroId'
        }
      },
      cuotaProgramada: {
        allowNull: false,
        type: Sequelize.FLOAT(10,2)
      },
      estadoCreditoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estado_credito',
          key: 'estadoCreditoId'
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
    await queryInterface.dropTable('credito');
  }
};
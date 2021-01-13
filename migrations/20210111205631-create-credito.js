'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('credito', {
      id: {
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
          key: 'id'
        }
      },
      rutaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'ruta',
          key: 'id'
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
          key: 'id'
        }
      },
      fechaCredito: {
        allowNull:false,
        type: Sequelize.DATE
      },
      montoCredito: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      totalAPagar: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      periodoCobroId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'periodo_cobro',
          key: 'id'
        }
      },
      cuotaProgramada: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      estadoCreditoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'estado_credito',
          key: 'id'
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
    await queryInterface.dropTable('credito');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario_empresa', {
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
      usuarioId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'usuario',
          key: 'id'
        }
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
    await queryInterface.dropTable('usuario_empresa');
  }
};
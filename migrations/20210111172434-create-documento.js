'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('documento', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'persona',
          key: 'id'
        }
      },
      tipoDocumentoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_documento',
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
    await queryInterface.dropTable('documento');
  }
};
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('direccion', {
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
      tipoDireccionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'tipo_direccion',
          key: 'id'
        }
      },
      municipioId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'municipio',
          key: 'id'
        }
      },
      direccion: {
        allowNull: false,
        type: Sequelize.STRING(300)
      },
      gpsLatitude: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      gpsLongitud: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      foto: {
        allowNull: true,
        type: Sequelize.BLOB('long')
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
    await queryInterface.dropTable('direccion');
  }
};
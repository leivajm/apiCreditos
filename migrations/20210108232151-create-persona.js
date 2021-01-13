'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('persona', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      primerNombre: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      segundoNombre: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      otrosNombres: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      primerApellido: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      segundoApellido: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      apellidoCasada: {
        allowNull: true,
        type: Sequelize.STRING(50)
      },
      generoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'genero',
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
    await queryInterface.dropTable('persona');
  }
};
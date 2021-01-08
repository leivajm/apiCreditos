'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuario', {
      usuarioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personaId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'persona',
          key: 'personaId'
        }
      },
      username: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
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
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuario');
  }
};
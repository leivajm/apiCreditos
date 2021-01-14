'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('usuario', [{
        id: 1,
        username: 'admin',
        password: '123',
        estadoId: 1,
        fechaHora: new Date(),
        usuarioIdCreacion: 1,
        fechaHoraUpdate: new Date(),
        usuarioIdUpdate: 1
    }], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('usuario', null, {});
    
  }
};

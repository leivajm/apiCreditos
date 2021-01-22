'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('usuario', [{
        id: 1,
        username: 'admin',
        password: '$2b$05$bZL.LtegKjhIWO27sDEh..hvo3.p6LxeW0TIABAVQZr2JcVGM8jRC',
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

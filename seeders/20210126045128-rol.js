'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
     await queryInterface.bulkInsert('rol', [
       {
        id: 1,
        descripcion: 'Super Administrador',
        estadoID: 1,
        fechaHora: new Date(),
        usuarioIdCreacion: 1,
        fechaHoraUpdate: new Date(),
        usuarioIdUpdate: 1,
        },
        {
          id: 2,
          descripcion: 'Administrador',
          estadoID: 1,
          fechaHora: new Date(),
          usuarioIdCreacion: 1,
          fechaHoraUpdate: new Date(),
          usuarioIdUpdate: 1,
        },
        {
          id: 3,
          descripcion: 'Cobrador',
          estadoID: 1,
          fechaHora: new Date(),
          usuarioIdCreacion: 1,
          fechaHoraUpdate: new Date(),
          usuarioIdUpdate: 1,
          },
      ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('rol', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
  }
};

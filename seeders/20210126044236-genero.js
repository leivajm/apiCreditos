'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    
    await queryInterface.bulkInsert('genero', [
      {
       id: 1,
       descripcion: 'Masculino',
       estadoId: 1
      },
      {
        id: 2,
        descripcion: 'Femenino',
        estadoId: 1
       },
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('genero', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * 
     */
  }
};

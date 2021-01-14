'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('estado', [
      {
        id: 1,
        descripcion: 'activo'
      }, 
      {
        id: 2,
        descripcion: 'inactivo'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkDelete('estado', null, {});
     
  }
};

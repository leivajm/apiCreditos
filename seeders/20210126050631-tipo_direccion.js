'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('tipo_direccion', [
       {
        id: 1,
        descripcion: 'Casa',
        estadoId: 1
        },
        {
          id: 2,
          descripcion: 'Trabajo',
          estadoId: 1
        },
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tipo_direccion', null, {});
  }
};

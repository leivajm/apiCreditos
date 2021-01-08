'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class persona extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  persona.init({
    personaId: DataTypes.INTEGER,
    primerNombre: DataTypes.STRING,
    segundoNombre: DataTypes.STRING,
    otrosNombres: DataTypes.STRING,
    primerApellido: DataTypes.STRING,
    segundoApelldio: DataTypes.STRING,
    apellidoCasada: DataTypes.STRING,
    generoId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'persona',
  });
  return persona;
};
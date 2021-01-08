'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tipo_documento.init({
    tipoDocumentoId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tipo_documento',
  });
  return tipo_documento;
};
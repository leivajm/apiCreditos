'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class periodo_cobro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  periodo_cobro.init({
    periodoCobroId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    numeroCuotas: DataTypes.INTEGER,
    diasPago: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'periodo_cobro',
  });
  return periodo_cobro;
};
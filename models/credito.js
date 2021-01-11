'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class credito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  credito.init({
    creditoId: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER,
    rutaId: DataTypes.INTEGER,
    codigoTarjeta: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    fechaCredito: DataTypes.DATE,
    montoCredito: DataTypes.FLOAT,
    totalAPagar: DataTypes.FLOAT,
    periodoCobroId: DataTypes.INTEGER,
    cuotaProgramada: DataTypes.FLOAT,
    estadoCreditoId: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'credito',
  });
  return credito;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plan_pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plan_pago.init({
    planPagoId: DataTypes.INTEGER,
    creditoId: DataTypes.INTEGER,
    numeroCuota: DataTypes.INTEGER,
    fechaCuota: DataTypes.DATE,
    monto: DataTypes.FLOAT,
    saldo: DataTypes.FLOAT,
    pagoId: DataTypes.INTEGER,
    observaciones: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plan_pago',
  });
  return plan_pago;
};
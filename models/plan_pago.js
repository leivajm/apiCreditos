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
    //id: DataTypes.INTEGER,
    creditoId: DataTypes.INTEGER,
    numeroCuota: DataTypes.INTEGER,
    fechaCuota: DataTypes.DATE,
    monto: DataTypes.DECIMAL,
    saldo: DataTypes.DECIMAL,
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
    timestamps: false,
    freezeTableName: true
  });
  plan_pago.associate = function(models) {
    plan_pago.belongsTo(models.credito, {foreignKey: 'creditoId', as: 'credito' });
    plan_pago.belongsTo(models.pago, {foreignKey: 'pagoId', as: 'pago' });
    plan_pago.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    plan_pago.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    plan_pago.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return plan_pago;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pago extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pago.init({
    //id: DataTypes.INTEGER,
    creditoId: DataTypes.INTEGER,
    monto: DataTypes.DECIMAL,
    mora: DataTypes.DECIMAL,
    saldo: DataTypes.DECIMAL,
    observaciones: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'pago',
    timestamps: false,
    freezeTableName: true
  });
  pago.associate = function(models) {
    pago.belongsTo(models.credito, {foreignKey: 'creditoId', as: 'credito' });
    pago.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    pago.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    pago.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return pago;
};
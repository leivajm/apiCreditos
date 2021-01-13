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
    //id: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER,
    rutaId: DataTypes.INTEGER,
    codigoTarjeta: DataTypes.STRING,
    clienteId: DataTypes.INTEGER,
    fechaCredito: DataTypes.DATE,
    montoCredito: DataTypes.DECIMAL,
    totalAPagar: DataTypes.DECIMAL,
    periodoCobroId: DataTypes.INTEGER,
    cuotaProgramada: DataTypes.DECIMAL,
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
    timestamps: false,
    freezeTableName: true,
  });
  credito.associate = function(models) {
    credito.belongsTo(models.empresa, {foreignKey: 'empresaId', as: 'empresa' });
    credito.belongsTo(models.ruta, {foreignKey: 'rutaId', as: 'ruta' });
    credito.belongsTo(models.persona, {foreignKey: 'clienteId', as: 'persona' });
    credito.belongsTo(models.periodo_cobro, {foreignKey: 'periodoCobroId', as: 'periodoCobro' });
    credito.belongsTo(models.estado_credito, {foreignKey: 'estadoCreditoId', as: 'estadoCredito' });
    credito.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    credito.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    credito.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return credito;
};
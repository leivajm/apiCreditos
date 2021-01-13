'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario_empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario_empresa.init({
    //id: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'usuario_empresa',
    timestamps: false,
    freezeTableName: true
  });
  usuario_empresa.associate = function(models) {
    usuario_empresa.belongsTo(models.empresa, {foreignKey: 'empresaId', as: 'empresa' });
    usuario_empresa.belongsTo(models.usuario, {foreignKey: 'usuarioId', as: 'usuario' });
    usuario_empresa.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    usuario_empresa.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    usuario_empresa.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return usuario_empresa;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario_rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario_rol.init({
    //id: DataTypes.INTEGER,
    usuarioId: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'usuario_rol',
    timestamps: false,
    freezeTableName: true
  });
  usuario_rol.associate = function(models) {
    usuario_rol.belongsTo(models.usuario, {foreignKey: 'usuarioId', as: 'usuario' });
    usuario_rol.belongsTo(models.rol, {foreignKey: 'rolId', as: 'rol' });
    usuario_rol.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    usuario_rol.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    usuario_rol.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return usuario_rol;
};
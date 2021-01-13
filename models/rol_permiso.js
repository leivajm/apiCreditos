'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol_permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rol_permiso.init({
    //id: DataTypes.INTEGER,
    rolId: DataTypes.INTEGER,
    permisoId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'rol_permiso',
    timestamps: false,
    freezeTableName: true
  });
  rol_permiso.associate = function(models) {
    rol_permiso.belongsTo(models.rol, {foreignKey: 'rolId', as: 'rol' });
    rol_permiso.belongsTo(models.permiso, {foreignKey: 'permisoId', as: 'permiso' });
    rol_permiso.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    rol_permiso.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    rol_permiso.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return rol_permiso;
};
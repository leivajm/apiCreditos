'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  rol.init({
    //id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'rol',
    timestamps: false,
    freezeTableName: true
  });
  rol.associate = function(models) {
    rol.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    rol.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    rol.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return rol;
};
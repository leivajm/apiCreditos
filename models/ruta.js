'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ruta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  ruta.init({
    //id: DataTypes.INTEGER,
    empresaId: DataTypes.INTEGER,
    codigoRuta: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'ruta',
    timestamps: false,
    freezeTableName: true
  });
  ruta.associate = function(models) {
    ruta.belongsTo(models.empresa, {foreignKey: 'empresaId', as: 'empresa' });
    ruta.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    ruta.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    ruta.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return ruta;
};
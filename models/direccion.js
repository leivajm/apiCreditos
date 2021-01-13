'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  direccion.init({
    //id: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER,
    tipoDireccionId: DataTypes.INTEGER,
    municipioId: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    gpsLatitude: DataTypes.STRING,
    gpsLongitud: DataTypes.STRING,
    foto: DataTypes.BLOB('long'),
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'direccion',
    timestamps: false,
    freezeTableName: true,
  });
  direccion.associate = function(models) {
    direccion.belongsTo(models.persona, {foreignKey: 'personaId', as: 'persona' });
    direccion.belongsTo(models.tipo_direccion, {foreignKey: 'tipoDireccionId', as: 'tipoDireccion' });
    direccion.belongsTo(models.municipio, {foreignKey: 'municipioId', as: 'municipio' });
    direccion.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    direccion.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    direccion.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return direccion;
};
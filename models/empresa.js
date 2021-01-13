'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  empresa.init({
    //id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'empresa',
    timestamps: false,
    freezeTableName: true
  });
  empresa.associate = function(models) {
    empresa.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    empresa.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    empresa.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return empresa;
};
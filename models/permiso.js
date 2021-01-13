'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class permiso extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  permiso.init({
    //id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'permiso',
    timestamps: false,
    freezeTableName: true
  });
  permiso.associate = function(models) {
    permiso.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' })
  }
  return permiso;
};
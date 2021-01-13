'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_direccion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tipo_direccion.init({
    //id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'tipo_direccion',
    timestamps: false,
    freezeTableName: true
  });
  tipo_direccion.associate = function(models) {
    tipo_direccion.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' })
  }
  return tipo_direccion;
};
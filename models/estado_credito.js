'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado_credito extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  estado_credito.init({
    //id: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'estado_credito',
    timestamps: false,
    freezeTableName: true
  });
  estado_credito.associate = function(models) {
    estado_credito.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' })
  }
  return estado_credito;
};
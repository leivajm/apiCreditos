'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class municipio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  municipio.init({
    //id: DataTypes.INTEGER,
    departamentoId: DataTypes.INTEGER,
    codigo: DataTypes.STRING,
    descripcion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'municipio',
    timestamps: false,
    freezeTableName: true
  });
  municipio.associate = function(models) {
    municipio.belongsTo(models.departamento, {foreignKey: 'departamentoId', as: 'departamento' })
  }
  return municipio;
};
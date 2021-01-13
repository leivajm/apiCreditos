'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class genero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  genero.init({
    //generoId: { type: DataTypes.INTEGER, field: 'generoId'},
    descripcion: DataTypes.STRING,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'genero',
    timestamps: false,
    freezeTableName: true,
  });
  //genero.removeAttribute("id");
  genero.associate = function(models) {
    genero.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' })
  }
  //genero.associate = function
  return genero;
};
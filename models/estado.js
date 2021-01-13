'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class estado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  estado.init({
    //estadoId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'estado',
    timestamps: false,
    freezeTableName: true,
  });
  //estado.removeAttribute("id");
  return estado;
};
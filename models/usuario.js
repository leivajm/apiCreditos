'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  usuario.init({
    //id: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    fechaHora: DataTypes.DATE,
    estadoId: DataTypes.INTEGER,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'usuario',
    timestamps: false,
    freezeTableName: true
  });
  usuario.associate = function(models) {
    usuario.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' })
  }
  return usuario;
};
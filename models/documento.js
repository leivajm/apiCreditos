'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  documento.init({
    //id: DataTypes.INTEGER,
    personaId: DataTypes.INTEGER,
    tipoDocumentoId: DataTypes.INTEGER,
    estadoId: DataTypes.INTEGER,
    fechaHora: DataTypes.DATE,
    usuarioIdCreacion: DataTypes.INTEGER,
    fechaHoraUpdate: DataTypes.DATE,
    usuarioIdUpdate: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'documento',
    timestamps: false,
    freezeTableName: true
  });
  documento.associate = function(models) {
    documento.belongsTo(models.persona, {foreignKey: 'personaId', as: 'persona' });
    documento.belongsTo(models.tipo_documento, {foreignKey: 'tipoDocumentoId', as: 'tipoDocumento' });
    documento.belongsTo(models.estado, {foreignKey: 'estadoId', as: 'estado' });
    documento.belongsTo(models.usuario, {foreignKey: 'usuarioIdCreacion', as: 'usuarioCreacion' });
    documento.belongsTo(models.usuario, {foreignKey: 'usuarioIdUpdate', as: 'usuarioUpdate' });
  }
  return documento;
};
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define('Categoria', {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  }, {
    tableName: 'categorias',
    timestamps: false
  });

  return Categoria;
};

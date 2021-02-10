const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  // user.associate = (models) => {
  //   user.hasMany(models.Post, { as: 'posts', foreignKey: 'userId' });
  // };

  return product;
};

module.exports = Product;
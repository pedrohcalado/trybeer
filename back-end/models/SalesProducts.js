const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id'
      }
    },
    quantity: {
      type: DataTypes.INTEGER
    },
  },
    {
      timestamps: false,
    });

  saleProduct.associate = (models) => {
    console.log(models)
    saleProduct.belongsToMany(models.Sale, { as: 'sale', foreignKey: 'productId', otherKey: 'saleId',through: saleProduct });

    saleProduct.belongsToMany(models.Product, { as: 'product', foreignKey: 'saleId', otherKey: 'productId', through: saleProduct });
  }

  return saleProduct;
};

module.exports = SaleProduct;
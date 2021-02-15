const { SaleProduct, Sale, Product, User } = require('../models');

const adjustResponse = (result) => ({
  saleId: result.Product.SaleProduct.saleId,
  sale_date: result.sale_date,
  name: result.Product.name,
  // quantity: ,
  // total: ,
  // status: ,
});

const getOrderDetails = async (id) => {
  const result = await Sale.findAll({
    attributes: ['sale_date', 'status'],
    include:
    {
      model: Product,
      as: 'Product',
      attributes: ['name', 'price'],
      required: true,
      through: {
        model: SaleProduct,
        as: 'SaleProduct',
        attributes: ['quantity', 'saleId'],
        where: { saleId: id },
        required: true,
      }
    },
  });
  return result;
};
// return result.map((data) => adjustResponse(data));



// const getOrderDetails = async (id) => SaleProduct.findAll()

module.exports = {
  getOrderDetails,
};

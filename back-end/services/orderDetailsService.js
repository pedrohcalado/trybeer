const { SaleProduct, Sale, Product } = require('../models');

const getOrderDetails = async (id) =>
  SaleProduct.findAll({
    // where: {
    //   saleId: id,
    // },
    // attributes: {
    //   exclude: ['']
    // },
    include: [{
      model: Sale,
      through: {
        id
      }
    }]
      // model: Sale,
      // as: 'Sale',
      // attributes: ['total_price'],
    // },
    // include: {
    //   model: 'Product',
    //   attributes: [''],
    // }
  });

module.exports = {
  getOrderDetails,
};

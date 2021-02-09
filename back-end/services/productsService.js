const productsModel = require('../modelsOLD/productsModel');

const getAllProducts = async () => productsModel.getAllProducts();

module.exports = {
  getAllProducts,
};

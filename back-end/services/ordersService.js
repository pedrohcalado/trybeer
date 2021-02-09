const ordersModel = require('../modelsOLD/ordersModel');

const getAllOrders = async (id) => ordersModel.getAllOrders(id);

module.exports = {
  getAllOrders,
};

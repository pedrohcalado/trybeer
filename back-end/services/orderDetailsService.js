const orderDetailsModel = require('../modelsOLD/orderDetailsModel');

const getOrderDetails = async (id) => orderDetailsModel.getOrderDetails(id);

module.exports = {
  getOrderDetails,
};

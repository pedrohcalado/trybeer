const { Router } = require('express');

const ordersService = require('../services/ordersService');
const orderDetailsService = require('../services/orderDetailsService');
const duzentos = 200;
const quinhentos = 500;

const orders = Router();
orders.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const getOrderDetails = await orderDetailsService.getOrderDetails(id);
    res.status(duzentos).json(getOrderDetails);
  } catch (error) {
    res.status(quinhentos).json({ message: 'Algo deu errado.' });
  }
});

orders.post('/', async (req, res) => {
  try {
    const getAllOrders = await ordersService.getAllOrders(req.body.id);
    res.status(duzentos).json(getAllOrders);
  } catch (error) {
    console.error(error);
    res.status(quinhentos).json({ message: 'Algo deu errado.' });
  }
});

module.exports = orders;

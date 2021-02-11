const { Router } = require('express');

const ordersService = require('../services/ordersService');
const orderDetailsService = require('../services/orderDetailsService');


const orders = Router();
orders.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    console.log('aqui')
    const getOrderDetails = await orderDetailsService.getOrderDetails(id);
    console.log(getOrderDetails);
    res.status(200).json(getOrderDetails);
  } catch (error) {
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

orders.post('/', async (req, res) => {
  try {
    const orders = await ordersService.getAllOrders(req.body.id);
    const result = orders.map((order) => order.dataValues);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Algo deu errado.' });
  }
});

module.exports = orders;

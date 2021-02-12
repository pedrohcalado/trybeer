const { Router } = require('express');
const checkoutService = require('../services/checkoutService');

const checkout = Router();

const duzentos = 200;
const quinhentos = 500;

checkout.post('/', async (req, res) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, cart } = req.body;
  try {
    const insertCheckout = await checkoutService.insertCheckout(
      userId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      cart,
    );
    res.status(duzentos).json(insertCheckout);
  } catch (error) {
    console.error(error);
    res.status(quinhentos).json({ message: 'Algo deu errado.' });
  }
});

module.exports = checkout;

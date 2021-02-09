const { Router } = require('express');

const productsService = require('../services/productsService');

const products = Router();

const duzentos = 200;
const quinhentos = 500;

products.get('/', async (req, res) => {
  try {
    const getAllProducts = await productsService.getAllProducts();
    res.status(duzentos).json(getAllProducts);
  } catch (error) {
    console.error(error);
    res.status(quinhentos).json({ message: 'Algo deu errado.' });
  }
});

module.exports = products;

const { Router } = require('express');
const rescue = require('express-rescue');
const salesService = require('../services/salesService');

const sales = Router();

const duzentos = 200;
const quinhentos = 500;
const quatrocentosQuatro = 404; 

sales.get('/', async (req, res) => {
  try {
    const getAllSales = await salesService.getAllSales(req.body.id);
    res.status(duzentos).json(getAllSales);
  } catch (error) {
    console.error(error);
    res.status(quinhentos).json({ message: 'Algo deu errado.' });
  }
});

sales.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await salesService.getSale(id);
    return res.status(duzentos).json(sale);
  } catch (err) {
    if (err.code === 'not_found') {
      res.status(quatrocentosQuatro).json({ err });
    }
  }
}));

sales.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const response = await salesService.update(id, status);
    return res.status(duzentos).json(response);
  } catch (err) {
    if (err.code === 'not_found') {
      return res.status(quatrocentosQuatro).json({ err });
    }
  }
}));

module.exports = sales;

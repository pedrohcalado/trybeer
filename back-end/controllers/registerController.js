const { Router } = require('express');
const rescue = require('express-rescue');
const registerService = require('../services/registerServices');

const register = Router();
const createdCode = 201;

register.post('/', rescue(async (req, res, next) => {
  const user = await registerService.create(req.body);
  if (user.error) {
    return next(user);
  }
  res.status(createdCode).json(user);
}));

module.exports = register;

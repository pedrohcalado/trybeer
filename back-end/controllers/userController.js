const { Router } = require('express');
const rescue = require('express-rescue');
const userService = require('../services/userService');

const user = Router();

const createdCode = 201;

user.post(
  '/login',
  rescue(async (req, res, next) => {
    const user = await userService.validationUser(req.body);
    if (user.error) {
      return next(user);
    }
    res.status(createdCode).json(user);
  }),
);

user.post('/register', rescue(async (req, res, next) => {
  const user = await userService.create(req.body);
  if (user.error) {
    return next(user);
  }
  const { password, ...userWithoutPassword } = user.dataValues;
  res.status(createdCode).json(userWithoutPassword);
}));

module.exports = user;

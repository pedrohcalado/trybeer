const { Router } = require('express');
const rescue = require('express-rescue');
const profileService = require('../services/profileService');

const profileRouter = Router();

const duzentos = 200;
const quatrocentosQuatro = 404;

profileRouter.put('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const response = await profileService.update(id, name);
    return res.status(duzentos).json(response);
  } catch (err) {
    if (err.code === 'not_found') {
      return res.status(quatrocentosQuatro).json({ err });
    }
  }
}));

module.exports = profileRouter;

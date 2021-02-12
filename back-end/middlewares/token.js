const dezesseis = 16;
const quatrocentosUm = 401;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(quatrocentosUm).json({ message: 'Token não encontrado' });
  }
  if (String(token).length !== dezesseis) {
    return res.status(quatrocentosUm).json({ message: 'Token inválido' });
  }
  next();
};

const quatrocentos = 400;
const quatrocentosUm = 401;
const quatrocentosQuatro = 404;
const quatrocentosNove = 409;

module.exports = (err, _req, res, _next) => {
  console.error(err);
  const { message, code } = err;
  if (code === 'invalid_data') {
    res.status(quatrocentos).json({ message });
  }
  if (code === 'conflict') {
    res.status(quatrocentosNove).json({ message });
  }
  if (code === 'unauthorized_data') {
    res.status(quatrocentosUm).json({ message });
  }
  if (code === 'invalid_user') {
    res.status(quatrocentosUm).json({ message });
  }
  if (code === 'not_found') {
    res.status(quatrocentosQuatro).json({ message });
  }
};

const crypto = require('crypto');
const { User } = require('../models');

const passwordLength = 6;
const tokenLength = 8;

const emailValido = (email) => {
  const regexMail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
  return regexMail.test(String(email).toLowerCase());
};

const isEmailvalid = (email) => {
  if (!emailValido(email)) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'O campo e-mail deve ter o formato email@email.com',
    };
  }
};

const isPasswordFilled = (password) => {
  if (password === '' || !password) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'O campo "senha" é obrigatório',
    };
  }
};

const isPasswordValid = (password) => {
  if (String(password).length < passwordLength) {
    return {
      error: true,
      code: 'invalid_data',
      message: 'A senha deve possuir 6 ou mais caracteres',
    };
  }
};

const isUserRegistered = (user) => {
  if (user === undefined) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Usuário não cadastrado',
    };
  }
};

const isPasswordCorrect = (password, user) => {
  if (user.password !== password) {
    return {
      error: true,
      code: 'invalid_user',
      message: 'Senha incorreta',
    };
  }
};

const getByEmail = async (email) => await User.findOne({
  where: { email },
});

const validationUser = async (body) => {
  const { email, password } = body;
  const user = await getByEmail(email);
  isEmailvalid(email);
  isPasswordFilled(password);
  isPasswordValid(password);
  isUserRegistered(user);
  isPasswordCorrect(password, user);
  const token = crypto.randomBytes(tokenLength).toString('hex');
  return {
    token,
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    message: 'Token gerado'
  };
};

const create = async (user) => {
  const { email } = user;
  const validation = await getByEmail(email);
  if (validation) {
    return {
      error: true,
      code: 'conflict',
      message: 'E-mail already in database.',
    };
  }
  return model.create(user);
};

module.exports = {
  validationUser,
  getByEmail,
  create,
};

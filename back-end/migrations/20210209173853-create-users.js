'use strict';

const id = {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
};

const name = {
  type: Sequelize.STRING,
  allowNull: false
};

const email = {
  type: Sequelize.STRING,
  allowNull: false,
  unique: true
};

const password = {
  type: Sequelize.STRING,
  allowNull: false
};

const role = {
  type: Sequelize.STRING,
  allowNull: false
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id,
      name,
      email,
      password,
      role,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};

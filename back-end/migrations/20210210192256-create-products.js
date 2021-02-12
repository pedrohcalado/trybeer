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

const price = {
  type: Sequelize.FLOAT,
  allowNull: false,
};

const url_image = {
  type: Sequelize.STRING,
  allowNull: false
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id,
      name,
      price,
      url_image,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Products');
  }
};

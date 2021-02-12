'use strict';

const saleId = {
  type: Sequelize.INTEGER,
  allowNull: false,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
    model: 'Sales',
    key: 'id',
  },
};

const productId = {
  type: Sequelize.INTEGER,
  allowNull: false,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
    model: 'Products',
    key: 'id',
  },
};

const quantity = {
  type: Sequelize.INTEGER,
  allowNull: false,
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('SaleProducts', {
      saleId,
      productId,
      quantity,
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SaleProducts');
  }
};

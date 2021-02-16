'use strict';

const saleId = (Sequelize) => ({
  type: Sequelize.INTEGER,
  allowNull: false,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
    model: 'sales',
    key: 'id',
  },
});

const productId = (Sequelize) => ({
  type: Sequelize.INTEGER,
  allowNull: false,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
    model: 'products',
    key: 'id',
  },
});

const quantity = (Sequelize) => ({
  type: Sequelize.INTEGER,
  allowNull: false,
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('saleProducts', {
      saleId: saleId(Sequelize),
      productId: productId(Sequelize),
      quantity: quantity(Sequelize),
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('saleProducts');
  }
};

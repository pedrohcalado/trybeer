'use strict';

const id = {
  type: Sequelize.INTEGER,
  primaryKey: true,
  autoIncrement: true,
  allowNull: false
};

const userId = {
  type: Sequelize.INTEGER,
  allowNull: false,
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  references: {
    model: 'Users',
    key: 'id',
  },
};

const total_price = {
  type: Sequelize.FLOAT,
  allowNull: false,
};

const delivery_address = {
  type: Sequelize.STRING,
  allowNull: false,
};

const delivery_number = {
  type: Sequelize.INTEGER,
  allowNull: false,
};

const sale_date = {
  type: Sequelize.DATE,
  allowNull: false,
};

const status = {
  type: Sequelize.STRING,
  allowNull: false,
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sales', {
      id,
      userId,
      total_price,
      delivery_address,
      delivery_number,
      sale_date,
      status,
    },
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sales');
  }
};

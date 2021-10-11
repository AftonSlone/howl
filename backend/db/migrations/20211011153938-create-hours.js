"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Hours", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      businessId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Businesses" },
      },
      monday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tuesday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      wednesday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      thursday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      friday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      saturday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      sunday: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Hours");
  },
};

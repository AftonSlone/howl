"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Businesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      typeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "BusinesTypes" },
      },
      ownerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Users" },
      },
      loc: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      stateId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "States" },
      },
      cityId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Cities" },
      },
      street: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      info: {
        allowNull: false,
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable("Businesses");
  },
};

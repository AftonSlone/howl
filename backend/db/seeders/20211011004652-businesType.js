"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "BusinesTypes",
      [
        {
          name: "Restaurants",
        },
        {
          name: "Auto Services",
        },
        {
          name: "Shopping",
        },
        {
          name: "Gyms",
        },
        {
          name: "Bars",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("BusinesTypes", null, {});
  },
};

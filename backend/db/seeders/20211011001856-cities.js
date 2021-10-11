"use strict";
const faker = require("faker");

const cities = [];
for (let i = 0; i < 300; i++) {
  cities.push({
    name: faker.address.city(),
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cities", cities, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};

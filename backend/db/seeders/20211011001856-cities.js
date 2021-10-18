"use strict";
const faker = require("faker");

const city = [
];

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 2; j++) {
    city.push({
      name: faker.address.city(),
      stateId: i + 1,
    });
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Cities", city, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Cities", null, {});
  },
};

"use strict";
const faker = require("faker");

const business = [];

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 6; j++) {
    for (let k = 0; k < 5; k++) {
      for (let l = 0; l < 3; l++) {
        business.push({
          name: faker.company.companyName(),
          typeId: k + 1,
          ownerId: Math.floor(Math.random() * (1000 - 501 + 1) + 501),
          stateId: i + 1,
          cityId: j + 1,
          street: faker.address.streetAddress(),
          info: faker.lorem.paragraph(),
        });
      }
    }
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Businesses", business, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};

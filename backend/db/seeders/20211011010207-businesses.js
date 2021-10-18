"use strict";
const faker = require("faker");
let count = 0;
const business = [];

for (let i = 0; i < 50; i++) {
  for (let j = 0; j < 2; j++) {
    count++;
    for (let k = 0; k < 5; k++) {
      business.push({
        name: faker.company.companyName(),
        typeId: Math.floor(Math.random() * (5 - 1 + 1) + 1),
        ownerId: Math.floor(Math.random() * (100 - 1 + 1) + 1),
        loc: JSON.stringify({
          lat: faker.address.latitude(),
          lng: faker.address.longitude(),
        }),
        stateId: i + 1,
        cityId: count,
        street: faker.address.streetAddress(),
        info: faker.lorem.paragraph(),
      });
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

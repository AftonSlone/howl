"use strict";
const faker = require("faker");

const reviews = [];

for (let i = 0; i < 500; i++) {
  for (let j = 0; j < 10; j++) {
    reviews.push({
      userId: Math.floor(Math.random() * (100 - 1 + 1) + 1),
      businessId: i + 1,
      rating: Math.floor(Math.random() * (5 - 1 + 1) + 1),
      text: faker.lorem.sentences(2),
    });
  }
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reviews", reviews, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  },
};

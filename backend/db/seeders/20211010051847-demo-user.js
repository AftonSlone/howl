"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");
const users = [];
for (let i = 0; i < 50; i++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    hashedPassword: bcrypt.hashSync(faker.internet.password()),
    businessAccount: false,
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", users, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};

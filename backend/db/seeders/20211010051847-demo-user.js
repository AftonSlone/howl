"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");
const users = [
  {
    username: "demo",
    email: "demo@demo.com",
    hashedPassword: bcrypt.hashSync("password"),
    businessAccount: true,
  },
];
for (let i = 0; i < 49; i++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    hashedPassword: bcrypt.hashSync(faker.internet.password()),
    businessAccount: false,
  });
}

for (let j = 0; j < 50; j++) {
  users.push({
    username: faker.internet.userName(),
    email: faker.internet.email(),
    hashedPassword: bcrypt.hashSync(faker.internet.password()),
    businessAccount: true,
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

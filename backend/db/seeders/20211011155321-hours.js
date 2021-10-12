"use strict";
let hours = [];

for (let i = 0; i < 25; i++) {
  hours.push({
    businessId: i + 1,
    monday: "7:00 AM - 9:00 PM",
    tuesday: "7:00 AM - 9:00 PM",
    wednesday: "7:00 AM - 9:00 PM",
    thursday: "7:00 AM - 9:00 PM",
    friday: "7:00 AM - 9:00 PM",
    saturday: "7:00 AM - 9:00 PM",
    sunday: "7:00 AM - 9:00 PM",
  });
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Hours", hours, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Hours", null, {});
  },
};

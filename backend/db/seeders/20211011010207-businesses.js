"use strict";
const faker = require("faker");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Businesses",
      [
        {
          name: "Farmhouse Kitchen Thai Cuisine",
          typeId: 1,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.760288, lng: -122.411041 }),
          stateId: 5,
          cityId: 1,
          street: "710 Florida St",
          info: 'Not your typical Thai! We are a Thai New Generation restaurant focusing on bringing you adventurous, bold flavors of traditional and non-traditional dishes using the freshest ingredients. Look out for our nightly specials from regional home cooked dishes to market fried grasshoppers. We are consistently voted the "Best Thai Restaurant" in San Francisco by Michelin Bib Gourmand 2016 - 2019',
        },
        {
          name: "Nopa",
          typeId: 1,
          ownerId,
          loc: JSON.stringify({ lat: 37.77489, lng: -122.43763 }),
          stateId: 5,
          cityId: 1,
          street: "560 Divisadero St",
          info: "Specializing in organic wood-fired cuisine, we serve simple food created with seasonal ingredients sourced from local purveyors.",
        },
        {
          name: "Marufuku Ramen",
          typeId: 1,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.78478, lng: -122.43139 }),
          stateId: 5,
          cityId: 1,
          street: "581 Webster St  Ste 235",
          info: "Marufuku Ramen—the authentic Hakata-style Tonkotsu ramen restaurant",
        },
        {
          name: `The Tailor's Son`,
          typeId: 1,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7885852, lng: -122.4340316 }),
          stateId: 5,
          cityId: 1,
          street: "2049 Fillmore St",
          info: "We specialize in a vegetable-forward menu of Northern Italian dishes like risotto and handmade pasta. Drinks from our bar are rooted in Italian cocktail history, and our wine list is 100% Italian, organic and biodynamic.",
        },
        {
          name: "The Snug",
          typeId: 1,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7909275, lng: -122.4344183 }),
          stateId: 5,
          cityId: 1,
          street: "2301 Fillmore St",
          info: 'Not your typical Thai! We are a Thai New Generation restaurant focusing on bringing you adventurous, bold flavors of traditional and non-traditional dishes using the freshest ingredients. Look out for our nightly specials from regional home cooked dishes to market fried grasshoppers. We are consistently voted the "Best Thai Restaurant" in San Francisco by Michelin Bib Gourmand 2016 - 2019',
        },
        {
          name: "Sunset 76 Auto Repair & Tire Center",
          typeId: 2,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7543151, lng: -122.4821966 }),
          stateId: 5,
          cityId: 1,
          street: "1700 Noriega St",
          info: "We are a full service Auto Repair Shop / Tire Sales Center / Smog Check & Smog Repair Center. We also specialize in Heating, Air Conditioning & Electrical Systems We stock reasonably priced & high quality tires. We also offer the most advanced Wheel Alignment technology available today. Shock or Strut replacement & suspension repair. We offer a full range of auto repair services including dealer level service on most vehicle makes. We have the right equipment to maintain & repair your American, Japanese or European car properly. Sunset 76 is the one stop shop for all of your auto repair needs. For more information visit our website! The Auto Repair Shop is open Monday - Saturday however the Gas Station is OPEN 24 hours, you may drop-off your car for repairs & pick-up your vehicle anytime.",
        },
        {
          name: "K & C Auto Service",
          typeId: 2,
          ownerId,
          loc: JSON.stringify({ lat: 37.778886, lng: -122.401807 }),
          stateId: 5,
          cityId: 1,
          street: "400 5th St",
          info: "We Specialist On Subaru BMW Mini Cooper Mercedes VW & Audi We Service BMW Diesel VW Audi TDI & Mercedes Benz Bluetec Engine. Call or email us if you need a quote for any Dealers Factory Schedule Maintenance, Service & Repair. We are a one stop automotive repair shop that perform full service on electrical & mechanical repair. Our San Francisco Service Center has the most update tools & equipment to provide the best service to our customers. Oil Change Factory Schedule Maintenance Electrical System Diagnostic Brake Repair Tune Up Check Engine Light Diagnostic Transmission Problems Repair & Service Air Conditioning Service Timing Belt & Water Pump Service Alignment Pre Purchase Car Inspection Clutch Replacement Head Gasket Replacement Engine Repair Suspension (Include Air Suspension System) Front End Work Our auto repair shop perform same High Dealerships Service with reasonable prices & Our Goal is to get your Car safe on the road.",
        },
        {
          name: "DAS Auto Service",
          typeId: 2,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.73224, lng: -122.433904 }),
          stateId: 5,
          cityId: 1,
          street: "1118 Hillside Blvd",
          info: "Here at DAS Auto we promise to make you think differently about your auto repair and maintenance experience. We treat our customers like they are family. We carefully diagnose what your vehicle needs and discuss with you your options. We give you both recommendations and alternatives to fit your budget. we offer OEM and aftermarket parts and will advise you on what best fits your needs. we provide shuttle service drop off and pick up and same day appointments. do your wallet and your car a favor- come to your one stop auto shop.",
        },
        {
          name: `JT's Auto Repair`,
          typeId: 2,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7565362, lng: -122.5017136 }),
          stateId: 5,
          cityId: 1,
          street: "3601 Lawton St",
          info: "Automotive Maintenance/Repair Smog Test & Repair(2000 & Newer) Aftermarket Accessories Electrical Systems Diagnosis/Repair/Modifications",
        },
        {
          name: "Mike's Union Auto Repair",
          typeId: 2,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7638477, lng: -122.4644828 }),
          stateId: 5,
          cityId: 1,
          street: "1311 7th Ave",
          info: "brake service A/C service engine service battery service Tune up Engine Maintain Car & Truck Care Suspension Work Coolant System and Radiator Service belts& hoes Timing belt Domestic cars & truck repair import cars & van repair",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};

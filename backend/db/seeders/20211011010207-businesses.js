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
        {
          name: "The Love of Ganesha",
          typeId: 3,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7696908, lng: -122.4480881 }),
          stateId: 5,
          cityId: 1,
          street: "1573 Haight St",
          info: "The Love of Ganesha is an internationally-beloved San Francisco Haight-Ashbury institution. Crystals, Clothing, and Jewelry from all around the world, music, bright colors, and unconditional love abound.",
        },
        {
          name: "Westfield San Francisco Centre",
          typeId: 3,
          ownerId,
          loc: JSON.stringify({ lat: 37.7835636, lng: -122.4070397 }),
          stateId: 5,
          cityId: 1,
          street: "865 Market St",
          info: "Located just two blocks from famed Union Square, Westfield San Francisco Centre has emerged as one of the most enticing downtown retail venues in the United States. Featuring the West Coast flagship Bloomingdale's and the second largest Nordstrom in the nation, this 1.5 million square foot shopping center is the largest urban shopping venue west of the Mississippi River encompassing over 200 shops and restaurants, a Burke Williams day spa and Century Theatres. Not only home to such outstanding brands as Burberry, Michael Kors, REDValentino, Tiffany & Co., Tory Burch and Zara-- this property is also an architectural marvel punctuated by its iconic 102-foot-wide steel and glass dome, historic rotunda, along with a beaux-arts façade that is one of the few such structures to survive San Francisco's 1906 earthquake. In addition, Westfield San Francisco Centre is an undeniable culinary tour de force, combining sizzling flavors in an innovative fast-casual dining terrace along with the award-winning, first-class cuisine available in the Restaurant Collection Under the Dome, featuring Cupola Pizzeria, M.Y. China and Tap 415.",
        },
        {
          name: "Wink SF",
          typeId: 3,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7511809, lng: -122.4344711 }),
          stateId: 5,
          cityId: 1,
          street: "4107 24th St",
          info: `Wink Sf specializes in unique, design driven housewares, kitchen wares, jewelry, cards, toys, tee shirts, photography related items, books, purses, laptop bags, wallets and basically,things we love! We are often commented upon as being "a well curated store".`,
        },
        {
          name: `Foggy Notion`,
          typeId: 3,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7833423, lng: -122.4606082 }),
          stateId: 5,
          cityId: 1,
          street: "124 Clement St",
          info: "Foggy Notion is a women-owned small business established in San Francisco's Inner Richmond in 2011. Our thoughtfully-curated apothecary section is stocked with small organic skincare brands from around the US. Our non-toxic candle selection is one of the best in San Francisco. We have an growing amount of eco-friendly home goods like plastic-free brushes and reusable cloths. We also carry a variety of handmade purses, bags, backpacks, and jewelry by independent designers. We even have a pantry area full of delicious teas, chocolates, and local honey. We take great pride in our friendly customer service and affordable prices. Stop by and let us help you find what you need!",
        },
        {
          name: "Rare Device",
          typeId: 3,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7751403, lng: -122.4376797 }),
          stateId: 5,
          cityId: 1,
          street: "600 Divisadero St",
          info: "Rare Device is a design store and art gallery in San Francisco. We feature good stuff for you and your home. We strive to promote designers, artists and artisans plus help them grow by taking on new projects and collaborations. Every object in the store has its own story, and has been chosen because it is either handmade, well-designed, useful, beautiful or all of the above. The aesthetic is modern and quirky while remaining warm and inviting - design that is accessible to all. Influences range from comic book art to entropy in nature, laser-etching to hand-lettering to nautical lore. Some things you'll find at Rare Device: housewares and tabletop, handbags and messenger bags, art prints, jewelry and watches for men and women, gifts for baby, cards and stationery, and little trinkets for those hard to surprise and please. You can preview our work on the web at raredevice.net or follow us on Instagram. See you soon!",
        },
        {
          name: "Live Fit Gym - Inner Richmond",
          typeId: 4,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7645572, lng: -122.4577636 }),
          stateId: 5,
          cityId: 1,
          street: "403 Arguello Blvd",
          info: "Live Fit in the inner Richmond has a full service gym, equipped with cardio, free weights, fitness classes, showers and changing rooms. Also has wellness services such as chiropractic, massage therapy, and acupuncture.",
        },
        {
          name: "FITNESS SF - Fillmore",
          typeId: 4,
          ownerId,
          loc: JSON.stringify({ lat: 37.7829647, lng: -122.4338268 }),
          stateId: 5,
          cityId: 1,
          street: "1455 Fillmore St",
          info: "The Fillmore location has a 25-Yard Indoor Pool with 5 Lanes and also a Hot Tub.",
        },
        {
          name: "Sunset Gym",
          typeId: 4,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7650797, lng: -122.4665788 }),
          stateId: 5,
          cityId: 1,
          street: "1247 9th Ave",
          info: `Sunset Gym is AWESOME!! Best price if you're looking for a gym around the Sunset area. This gym is great for strength training, and there's also a good selection of cardio machines.`,
        },
        {
          name: `FITNESS SF - SoMa`,
          typeId: 4,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7697352, lng: -122.4069785 }),
          stateId: 5,
          cityId: 1,
          street: "1001 Brannan St",
          info: "FITNESS SF Marin & Soma Outdoor Gyms open starting September 9th. Reservations are required through our New Member Portal or App. For the latest updates regarding reopening, please visit www.fitnesssf.com.",
        },
        {
          name: "The Firm SF",
          typeId: 4,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.766945, lng: -122.4468693 }),
          stateId: 5,
          cityId: 1,
          street: "225 Frederick St",
          info: "We are here to help you achieve a healthier lifestyle and have fun doing it! All you have to do is show up and we take care of the rest. We will take you through a comprehensive assessment and goal strategy session. Your workout will be designed by one of our nationally certified instructors and will be customized for your fitness objectives. Get motivated in one of our semi-private personal training sessions. Let our Diet Doc take care of organizing a meal plan that fits your needs. Don't have time to cook? Pick up one of our prepared meals. Need a massage or a physical therapist? We've got that covered too. We will make obtaining the body and fitness goals you want more efficient, so you can get more out of life.",
        },
        {
          name: "Fort Point Lower Haight",
          typeId: 5,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7715719, lng: -122.433863 }),
          stateId: 5,
          cityId: 1,
          street: "701 Haight St",
          info: "Order hard-to-find beers and one-off releases from Fort Point, delivered in 1-hour or less!",
        },
        {
          name: "Fiorella - Sunset",
          typeId: 5,
          ownerId,
          loc: JSON.stringify({ lat: 37.7651461, lng: -122.4662658 }),
          stateId: 5,
          cityId: 1,
          street: "1240 9th Ave",
          info: "Fiorella is a neighborhood Italian bar in the heart of the Inner Sunset.",
        },
        {
          name: "Fireside Bar",
          typeId: 5,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7639974, lng: -122.4643912 }),
          stateId: 5,
          cityId: 1,
          street: "603 Irving St",
          info: `This is your goto neighborhood bar.`,
        },
        {
          name: `Last Rites`,
          typeId: 5,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7678129, lng: -122.4294529 }),
          stateId: 5,
          cityId: 1,
          street: "718 14th St",
          info: "One of the best bars you may ever visit",
        },
        {
          name: "Lost and Found",
          typeId: 5,
          ownerId: Math.floor(Math.random() * (100 - 51 + 1) + 51),
          loc: JSON.stringify({ lat: 37.7425831, lng: -122.4817475 }),
          stateId: 5,
          cityId: 1,
          street: "1439 Taraval St",
          info: "Lost and Found SF is a cozy new cocktail bar located in the Sunset District. Our goal is to provide our neighborhood with some of the best cocktails San Francisco has to offer, without the hustle and bustle of having to head downtown. Our bar program is thoughtful and well executed by Suzanne Miller with the approachable nature of a small neighborhood bar.",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Businesses", null, {});
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Images",
      [
        {
          superheroId: 1,
          image: "30d8badd-597f-49ba-b970-432ec301a954.jpg",
        },
        {
          superheroId: 1,
          image: "a3ebd32e-9aed-48f3-8b86-c28a581d7606.jpg",
        },
        {
          superheroId: 2,
          image: "a05cb5ed-5ae2-46b9-8268-2aeb571a11e0.jpg",
        },
        {
          superheroId: 2,
          image: "ee22c1cc-3c80-4241-abd6-5300bced9bc7.jpg",
        },
        {
          superheroId: 3,
          image: "1f2b7a4a-c043-479b-bf40-75f21259a425.jpg",
        },
        {
          superheroId: 3,
          image: "acb1777e-7cb3-4fd3-bd12-e8a010731e49.jpg",
        },
        {
          superheroId: 4,
          image: "706f0ba7-bb09-4ed6-aa5a-dc9ae68b0f3c.jpg",
        },
        {
          superheroId: 4,
          image: "733aa9ea-ad2c-4645-abcd-71398759e0ef.jpg",
        },
        {
          superheroId: 5,
          image: "d61aa41c-c3cd-4363-9e20-6e36e11e9d9e.jpg",
        },
        {
          superheroId: 5,
          image: "084438ee-ce68-4867-9ec8-72312d82a5f7.jpg",
        },
        {
          superheroId: 6,
          image: "84dda550-77a0-417d-ab89-ed6ac6cb85d0.jpg",
        },
        {
          superheroId: 6,
          image: "2eeb1ea3-51d9-4baf-a9af-3bbb8697abb6.jpg",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Images", null, {});
  },
};

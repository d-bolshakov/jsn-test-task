"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Superheros",
      [
        {
          nickname: "Superman",
          real_name: "Clark Kent",
          origin_description:
            "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction...",
          superpowers:
            "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight...",
          catch_phrase:
            "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
        },
        {
          nickname: "Spider-Man",
          real_name: "Peter Benjamin Parker",
          origin_description:
            "American teenager Peter Parker, a poor sickly orphan, is bitten by a radioactive spider.",
          superpowers:
            'superhuman strength, speed, agility, jumping, reflexes, stamina, durability, coordination and balance, wall-climbing, precognition called "spider-sense", and healing.',
          catch_phrase: "With great power comes great responsibility.",
        },
        {
          nickname: "Batman",
          real_name: "Bruce Wayne",
          origin_description:
            "For Batman, the murder of Thomas and Martha Wayne was a pivotal moment in his life that changed him forever. Bruce witnessed his parents' brutal killing during a mugging when he was just a child, leaving him traumatized and orphaned.",
          superpowers:
            "incredbile strength, stamina and endurance while maintaining an extraoridinary intellect",
          catch_phrase: "I'm Batman!",
        },
        {
          nickname: "Hulk",
          real_name: "Dr. Robert Bruce Banner",
          origin_description:
            "scientist Bruce Banner was caught in a gamma bomb explosion that turned him into the Hulk.",
          superpowers: "Superhuman strength, speed, stamina",
          catch_phrase: "Hulk Smash!",
        },
        {
          nickname: "Wolverine",
          real_name: 'James "Jimmy" Howlett',
          origin_description:
            "He is a mutant with animal-keen senses, enhanced physical capabilities, a powerful regenerative ability known as a healing factor, and three retractable claws in each hand.",
          superpowers:
            "superhuman strength and reflexes, enhanced senses and tracking abilities, and a special healing power that also slows his aging.",
          catch_phrase:
            "I'm the best there is at what I do, but what I do isn't very nice",
        },
        {
          nickname: "Wonder Woman",
          real_name: "Diana Prince",
          origin_description:
            "she was sculpted from clay by her mother Queen Hippolyta and was given a life as an Amazon, along with superhuman powers as gifts by the Greek gods.",
          superpowers:
            "superhuman strength and speed as well as the ability to fly.",
          catch_phrase:
            "So long as life remains, there is always hope... and so long as there is hope, there can be victory!",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Superheros", null, {});
  },
};

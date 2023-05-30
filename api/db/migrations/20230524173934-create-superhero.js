"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Superheros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickname: {
        type: Sequelize.STRING,
        unique: true,
      },
      real_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      origin_description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      superpowers: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      catch_phrase: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Superheros");
  },
};

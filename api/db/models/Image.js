const Sequelize = require("sequelize");
const db = require("../database");
const Superhero = require("./Superhero");

const Image = db.define(
  "Images",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    superheroId: {
      type: Sequelize.INTEGER,
    },
    image: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false }
);

module.exports = Image;

const Sequelize = require("sequelize");
const db = require("../database");
const Image = require("./Image");

const Superhero = db.define(
  "Superheros",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nickname: {
      type: Sequelize.STRING,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    real_name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    origin_description: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    superpowers: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    catch_phrase: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  { timestamps: false }
);

Superhero.hasMany(Image, {
  onDelete: "CASCADE",
  foreignKey: "superheroId",
  as: "images",
});

module.exports = Superhero;

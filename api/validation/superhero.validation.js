const { checkSchema } = require("express-validator");

exports.SuperheroValidation = (strict = false) => {
  const schema = {
    nickname: {
      optional: strict ? false : { values: "falsy" },
      notEmpty: {
        errorMessage: "Nickname field should not be empty",
      },
      isString: {
        errorMessage: "Nickname field should be a string",
      },
    },
    real_name: {
      optional: strict ? false : { values: "falsy" },
      notEmpty: {
        errorMessage: "Real name field should not be empty",
      },
      isString: {
        errorMessage: "Real name field should be a string",
      },
    },
    origin_description: {
      optional: strict ? false : { values: "falsy" },
      notEmpty: {
        errorMessage: "Origin description field should not be empty",
      },
      isString: {
        errorMessage: "Origin description field should be a string",
      },
    },
    superpowers: {
      optional: strict ? false : { values: "falsy" },
      notEmpty: {
        errorMessage: "Superpowers field should not be empty",
      },
      isString: {
        errorMessage: "Superpowers field should be a string",
      },
    },
    catch_phrase: {
      optional: strict ? false : { values: "falsy" },
      notEmpty: {
        errorMessage: "Catch phrase field should not be empty",
      },
      isString: {
        errorMessage: "Catch phrase field should be a string",
      },
    },
  };
  return checkSchema(schema);
};

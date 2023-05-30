const { validationResult } = require("express-validator");
const { BadRequestError } = require("../exceptions/api-error.exception");

exports.ValidationResult = (req, res, next) => {
  try {
    const result = validationResult(req).formatWith((error) => error.msg);
    if (!result.isEmpty()) {
      throw BadRequestError(result.array()[0]);
    }
    next();
  } catch (err) {
    next(err);
  }
};

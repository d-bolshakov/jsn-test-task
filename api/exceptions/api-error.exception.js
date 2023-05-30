module.exports = class ApiError extends Error {
  errors;
  status;

  constructor(status, message, errors = []) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  static InternalError() {
    return new ApiError(500, "Internal error");
  }

  static BadRequestError(message, errors = []) {
    return new ApiError(400, message, errors);
  }
};

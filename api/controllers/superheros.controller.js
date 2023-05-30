const SuperherosService = require("../services/superheros.service");

class SuperherosController {
  async getList(req, res, next) {
    try {
      res.status(200).json(await SuperherosService.getList(req.query.page));
    } catch (err) {
      next(err);
    }
  }

  async getOne(req, res, next) {
    try {
      res.status(200).json(await SuperherosService.getOne(req.params.id));
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      res.status(201).json(await SuperherosService.create(req.body, req.files));
    } catch (err) {
      next(err);
    }
  }

  async edit(req, res, next) {
    try {
      res
        .status(200)
        .json(await SuperherosService.edit(req.params.id, req.body, req.files));
    } catch (err) {
      next(err);
    }
  }

  async remove(req, res, next) {
    try {
      res.status(200).json(await await SuperherosService.remove(req.params.id));
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new SuperherosController();

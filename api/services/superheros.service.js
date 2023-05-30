const Superhero = require("../db/models/Superhero");
const Image = require("../db/models/Image");
const FilesService = require("./files.service");
const { BadRequestError } = require("../exceptions/api-error.exception");
const { Op } = require("sequelize");

class SuperherosService {
  async getSuperherosCount() {
    return await Superhero.count();
  }

  async getList(page = 1) {
    const offset = (page - 1) * 5;
    const list = await Superhero.findAll({
      include: {
        model: Image,
        as: "images",
        attributes: ["id", "image"],
        separate: true,
        limit: 1,
      },
      attributes: ["id", "nickname"],
      offset,
      limit: 5,
    });
    let isMoreAvailable = true;
    if ((await this.getSuperherosCount()) - offset <= 5)
      isMoreAvailable = false;
    return {
      superheros: list,
      isMoreAvailable,
    };
  }

  async getOne(id) {
    const superhero = await Superhero.findOne({
      where: {
        id,
      },
      include: {
        model: Image,
        as: "images",
        attributes: ["id", "image"],
      },
    });
    if (!superhero)
      throw BadRequestError(`Superhero with id ${id} does not exist`);
    return { superhero };
  }

  async create(body, files) {
    const candidate = await Superhero.findOne({
      where: {
        nickname: body.nickname,
      },
    });
    if (candidate)
      throw BadRequestError(
        `Superhero with nickname '${body.nickname}' already exists`
      );
    const superhero = await Superhero.create(body);
    const imageNames = await FilesService.saveImages(files);
    const images = await Image.bulkCreate(
      imageNames.map((name) => ({
        superheroId: superhero.id,
        image: name,
      })),
      { validate: true }
    );
    return this.getOne(superhero.id);
  }

  async edit(id, body, files) {
    const superhero = await Superhero.findOne({ where: { id } });
    if (!superhero)
      throw BadRequestError(`Superhero with id ${id} does not exist`);
    if (body.deleted_images) {
      let images;
      if (body.deleted_images.constructor === Array) {
        images = await Image.findAll({
          where: {
            id: {
              [Op.or]: body.deleted_images,
            },
          },
        });
      } else {
        const image = await Image.findOne({
          where: {
            id: body.deleted_images,
          },
        });
        images = [image];
      }
      await FilesService.removeImages(images.map((image) => image.image));
      delete body.deleted_images;
      images.map(async (image) => await image.destroy());
    }
    if (files) {
      const imageNames = await FilesService.saveImages(files);
      const images = await Image.bulkCreate(
        imageNames.map((name) => ({
          superheroId: superhero.id,
          image: name,
        })),
        { validate: true }
      );
    }
    superhero.set(body);
    await superhero.save();
    return this.getOne(id);
  }

  async remove(id) {
    const superhero = await Superhero.findOne({
      where: { id },
      include: {
        model: Image,
        as: "images",
      },
    });
    if (!superhero)
      throw BadRequestError(`Superhero with id ${id} does not exist`);
    const images = superhero.images;
    console.log(images);
    await FilesService.removeImages(images.map((image) => image.image));
    await superhero.destroy();
    return { message: "Superhero was removed succesfully" };
  }
}

module.exports = new SuperherosService();

const path = require("path");
const uuid = require("uuid");
const fs = require("fs/promises");

class FilesService {
  async saveImages(files) {
    try {
      const fileNames = [];
      const basePath = path.resolve(__dirname, "..", "static", "images");
      await fs.mkdir(basePath, { recursive: true });

      files.map(async (file) => {
        const fileName = uuid.v4() + path.parse(file.name).ext;
        fs.writeFile(path.join(basePath, fileName), file.buffer);
        fileNames.push(fileName);
      });
      return fileNames;
    } catch (e) {
      throw Error("Error occured during saving images");
    }
  }

  async removeImages(files) {
    try {
      const basePath = path.resolve(__dirname, "..", "static", "images");
      files = files.map((file) => path.join(basePath, file));

      const promises = files.map((file) => fs.unlink(file));
      await Promise.all(promises);
    } catch (e) {
      throw Error("One or more images do not exist");
    }
  }
}

module.exports = new FilesService();

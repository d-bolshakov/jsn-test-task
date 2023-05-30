const Router = require("express");
const superherosController = require("../controllers/superheros.controller");
const fileUpload = require("express-fileupload");
const {
  FilesTransformer,
} = require("../middleware/files-transformer.middleware");
const { SuperheroValidation } = require("../validation/superhero.validation");
const { ValidationResult } = require("../validation/result.validation");

const router = new Router();

router.get("/", superherosController.getList);

router.get("/:id", superherosController.getOne);

router.post(
  "/",
  fileUpload(),
  FilesTransformer,
  SuperheroValidation((strict = true)),
  ValidationResult,
  superherosController.create
);

router.put(
  "/:id",
  fileUpload(),
  FilesTransformer,
  SuperheroValidation(),
  ValidationResult,
  superherosController.edit
);

router.delete("/:id", superherosController.remove);

module.exports = router;

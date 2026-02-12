const express = require("express");
const router = express.Router();

const configController = require("../controllers/config.controller");
const validate = require("../middlewares/validation.middleware");
const {
  createConfigSchema,
  updateConfigSchema,
} = require("../validators/config.validator");

router.post(
  "/",
  validate(createConfigSchema),
  configController.create
);

router.get("/", configController.findAll);

router.get("/:id", configController.findById);

router.patch(
  "/:id",
  validate(updateConfigSchema),
  configController.update
);

router.delete("/:id", configController.delete);

module.exports = router;

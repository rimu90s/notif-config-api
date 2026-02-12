const express = require("express");
const router = express.Router();

const configController = require("../controllers/config.controller");
const validate = require("../middlewares/validation.middleware");
const {
  createConfigSchema,
  updateConfigSchema,
} = require("../validators/config.validator");

/**
 * @swagger
 * /configs:
 *   post:
 *     summary: Create new configuration
 *     tags: [Configurations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - key
 *               - value
 *             properties:
 *               key:
 *                 type: string
 *               value:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Configuration created
 */


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

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
 * tags:
 *   name: Configurations
 *   description: Configuration management API
 */

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
 *       400:
 *         description: Validation or duplicate error
 */
router.post("/", validate(createConfigSchema), configController.create);

/**
 * @swagger
 * /configs:
 *   get:
 *     summary: Get all configurations
 *     tags: [Configurations]
 *     responses:
 *       200:
 *         description: List of configurations
 */
router.get("/", configController.findAll);

/**
 * @swagger
 * /configs/{id}:
 *   get:
 *     summary: Get configuration by ID
 *     tags: [Configurations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Configuration ID
 *     responses:
 *       200:
 *         description: Configuration found
 *       404:
 *         description: Configuration not found
 */
router.get("/:id", configController.findById);

/**
 * @swagger
 * /configs/{id}:
 *   patch:
 *     summary: Update configuration
 *     tags: [Configurations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key:
 *                 type: string
 *               value:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Configuration updated
 *       404:
 *         description: Configuration not found
 */
router.patch("/:id", validate(updateConfigSchema), configController.update);

/**
 * @swagger
 * /configs/{id}:
 *   delete:
 *     summary: Delete configuration
 *     tags: [Configurations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Configuration deleted
 *       404:
 *         description: Configuration not found
 */
router.delete("/:id", configController.delete);

module.exports = router;

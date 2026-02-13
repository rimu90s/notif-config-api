const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

/**
 * @swagger
 * tags:
 *   name: Notifications
 *   description: Notification management API
 */

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Create a new notification
 *     tags: [Notifications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - type
 *               - recipient
 *               - message
 *             properties:
 *               type:
 *                 type: string
 *                 example: email
 *               recipient:
 *                 type: string
 *                 example: user@example.com
 *               message:
 *                 type: string
 *                 example: Hello from API
 *     responses:
 *       201:
 *         description: Notification created successfully
 *       400:
 *         description: Validation error
 */
router.post("/", notificationController.create);

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get all notifications
 *     tags: [Notifications]
 *     responses:
 *       200:
 *         description: List of notifications
 */
router.get("/", notificationController.findAll);

/**
 * @swagger
 * /notifications/{id}:
 *   get:
 *     summary: Get notification by ID
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Notification ID
 *     responses:
 *       200:
 *         description: Notification found
 *       404:
 *         description: Notification not found
 */
router.get("/:id", notificationController.findById);

/**
 * @swagger
 * /notifications/{id}:
 *   delete:
 *     summary: Delete notification
 *     tags: [Notifications]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Notification ID
 *     responses:
 *       200:
 *         description: Notification deleted
 *       404:
 *         description: Notification not found
 */
router.delete("/:id", notificationController.delete);

module.exports = router;

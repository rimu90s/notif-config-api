const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notification.controller");

router.post("/", notificationController.create);
router.get("/", notificationController.findAll);
router.get("/:id", notificationController.findById);
router.delete("/:id", notificationController.delete);

module.exports = router;

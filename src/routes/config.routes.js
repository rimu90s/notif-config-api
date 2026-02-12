const express = require("express");
const router = express.Router();
const configController = require("../controllers/config.controller");

router.post("/", configController.create);
router.get("/", configController.findAll);
router.get("/:id", configController.findById);
router.patch("/:id", configController.update);
router.delete("/:id", configController.delete);

module.exports = router;

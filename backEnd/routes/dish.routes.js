// routes/dish.routes.js
const express = require("express");
const router = express.Router();
const dishController = require("../controllers/dish.controller");

router.post("/", dishController.create);
router.get("/", dishController.getAll);
router.get("/:id", dishController.getById);
router.put("/:id", dishController.update);
router.delete("/:id", dishController.delete);
router.post("/calculate-calories", dishController.calculateCalories);

module.exports = router; // Make sure to export the router

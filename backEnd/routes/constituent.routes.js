// routes/constituent.routes.js
const express = require("express");
const router = express.Router();
const constituentController = require("../controllers/constituent.controller");

router.post("/", constituentController.create);
router.get("/", constituentController.getAll);
router.get("/:id", constituentController.getById);
router.put("/:id", constituentController.update);
router.delete("/:id", constituentController.delete);

module.exports = router; // Make sure to export the router

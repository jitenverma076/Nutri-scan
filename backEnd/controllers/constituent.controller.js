// controllers/constituent.controller.js
const Constituent = require("../models/constituent.model");

const constituentController = {
  // Create new constituent
  create: async (req, res) => {
    try {
      const { name, caloriesPerUnit, unit } = req.body;
      const constituent = new Constituent({
        name,
        caloriesPerUnit,
        unit,
      });
      await constituent.save();
      res.status(201).json({
        success: true,
        data: constituent,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Get all constituents
  getAll: async (req, res) => {
    try {
      const constituents = await Constituent.find();
      res.status(200).json({
        success: true,
        data: constituents,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Get constituent by ID
  getById: async (req, res) => {
    try {
      const constituent = await Constituent.findById(req.params.id);
      if (!constituent) {
        return res.status(404).json({
          success: false,
          error: "Constituent not found",
        });
      }
      res.status(200).json({
        success: true,
        data: constituent,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Update constituent
  update: async (req, res) => {
    try {
      const constituent = await Constituent.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: Date.now() },
        { new: true, runValidators: true }
      );
      if (!constituent) {
        return res.status(404).json({
          success: false,
          error: "Constituent not found",
        });
      }
      res.status(200).json({
        success: true,
        data: constituent,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Delete constituent
  delete: async (req, res) => {
    try {
      const constituent = await Constituent.findByIdAndDelete(req.params.id);
      if (!constituent) {
        return res.status(404).json({
          success: false,
          error: "Constituent not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Constituent deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = constituentController;

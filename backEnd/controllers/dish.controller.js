// controllers/dish.controller.js
const Dish = require("../models/dish.model");
const Constituent = require("../models/constituent.model");

const dishController = {
  // Create new dish
  create: async (req, res) => {
    try {
      const { name, constituents } = req.body;

      // Calculate total calories
      let totalCalories = 0;
      for (const item of constituents) {
        const constituent = await Constituent.findById(item.constituent);
        if (!constituent) {
          return res.status(404).json({
            success: false,
            error: `Constituent with ID ${item.constituent} not found`,
          });
        }
        totalCalories += constituent.caloriesPerUnit * item.defaultQuantity;
      }

      const dish = new Dish({
        name,
        constituents,
        totalCalories,
      });

      await dish.save();
      res.status(201).json({
        success: true,
        data: dish,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Get all dishes
  getAll: async (req, res) => {
    try {
      const dishes = await Dish.find().populate("constituents.constituent");
      res.status(200).json({
        success: true,
        data: dishes,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Get dish by ID
  getById: async (req, res) => {
    try {
      const dish = await Dish.findById(req.params.id).populate(
        "constituents.constituent"
      );
      if (!dish) {
        return res.status(404).json({
          success: false,
          error: "Dish not found",
        });
      }
      res.status(200).json({
        success: true,
        data: dish,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Update dish
  update: async (req, res) => {
    try {
      const { constituents } = req.body;

      // Recalculate total calories if constituents are updated
      if (constituents) {
        let totalCalories = 0;
        for (const item of constituents) {
          const constituent = await Constituent.findById(item.constituent);
          if (!constituent) {
            return res.status(404).json({
              success: false,
              error: `Constituent with ID ${item.constituent} not found`,
            });
          }
          totalCalories += constituent.caloriesPerUnit * item.defaultQuantity;
        }
        req.body.totalCalories = totalCalories;
      }

      const dish = await Dish.findByIdAndUpdate(
        req.params.id,
        { ...req.body, updatedAt: Date.now() },
        { new: true, runValidators: true }
      ).populate("constituents.constituent");

      if (!dish) {
        return res.status(404).json({
          success: false,
          error: "Dish not found",
        });
      }

      res.status(200).json({
        success: true,
        data: dish,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Delete dish
  delete: async (req, res) => {
    try {
      const dish = await Dish.findByIdAndDelete(req.params.id);
      if (!dish) {
        return res.status(404).json({
          success: false,
          error: "Dish not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Dish deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },

  // Calculate calories for modified quantities
  calculateCalories: async (req, res) => {
    try {
      const { dishId, modifications } = req.body;

      const dish = await Dish.findById(dishId).populate(
        "constituents.constituent"
      );
      if (!dish) {
        return res.status(404).json({
          success: false,
          error: "Dish not found",
        });
      }

      let totalCalories = 0;
      const breakdown = [];

      for (const constituent of dish.constituents) {
        const modifiedQuantity =
          modifications[constituent.constituent._id] ||
          constituent.defaultQuantity;
        const caloriesForItem =
          constituent.constituent.caloriesPerUnit * modifiedQuantity;
        totalCalories += caloriesForItem;

        breakdown.push({
          name: constituent.constituent.name,
          quantity: modifiedQuantity,
          calories: caloriesForItem,
        });
      }

      res.status(200).json({
        success: true,
        data: {
          totalCalories,
          breakdown,
        },
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
      });
    }
  },
};

module.exports = dishController;

// models/dish.model.js
const mongoose = require("mongoose");

const dishSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  constituents: [
    {
      constituent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Constituent",
        required: true,
      },
      defaultQuantity: {
        type: Number,
        required: true,
        min: 0,
      },
    },
  ],
  totalCalories: {
    type: Number,
    required: true,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Dish", dishSchema);

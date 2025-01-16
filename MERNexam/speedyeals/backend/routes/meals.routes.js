const express = require("express");
const router = express.Router();  
const Meal = require("../models/meals.models");

// Get all meals
router.get("/", async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get meal by ID
router.get("/:id", async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);
    if (!meal) return res.status(404).json({ error: "Meal not found" });
    res.json(meal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create a new meal
router.post("/", async (req, res) => {
  try {
    const meal = new Meal(req.body);
    const savedMeal = await meal.save();
    res.status(201).json(savedMeal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update a meal
router.put("/:id", async (req, res) => {
  try {
    const updatedMeal = await Meal.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedMeal) return res.status(404).json({ error: "Meal not found" });
    res.json(updatedMeal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a meal
router.delete("/:id", async (req, res) => {
  try {
    const deletedMeal = await Meal.findByIdAndDelete(req.params.id);
    if (!deletedMeal) return res.status(404).json({ error: "Meal not found" });
    res.json(deletedMeal);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

import express from 'express';
import Pizza from '../models/Pizza.Models.js';

const router = express.Router();

// Récupérer toutes les pizzas
router.get('/', async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Créer une nouvelle pizza
router.post('/', async (req, res) => {
  try {
    const pizza = new Pizza(req.body);
    await pizza.save();
    res.status(201).json(pizza);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

export default router;

import express from 'express';
import Order from '../models/Order.Models.js';
import { authenticate } from '../middleware/auth.js';  // import the middleware

const router = express.Router();

router.post('/', authenticate, async (req, res) => {
  try {
   
    const order = new Order({
      ...req.body,
      userId: req.userId,  
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('items.pizzaId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;

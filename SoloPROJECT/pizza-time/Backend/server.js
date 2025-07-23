import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './routes/Auth.Routes.js';
import pizzaRoutes from './routes/pizza.routes.js';
import orderRoutes from './routes/Order.Routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(' MongoDB connected'))
  .catch((err) => console.error(' Mongo connection error:', err));


app.get('/', (req, res) => {
  res.send(' Pizza Time Backend is running!');
});


app.use('/api/auth', authRoutes);
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/orders', orderRoutes);


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? 'Loaded' : 'Not loaded');
});


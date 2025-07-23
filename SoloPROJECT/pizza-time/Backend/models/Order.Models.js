import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [
    {
      pizzaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
      quantity: Number
    }
  ],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Order', orderSchema);

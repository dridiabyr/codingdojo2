import mongoose from 'mongoose';

const pizzaSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
});

export default mongoose.model('Pizza', pizzaSchema);
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Removed the deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process if MongoDB connection fails
  }
};

module.exports = connectDB;

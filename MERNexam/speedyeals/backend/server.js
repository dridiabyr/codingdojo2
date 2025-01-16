const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/mongoose.config");  // Import the connectDB function
const seedMeals = require("./seeder");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); 

connectDB()
  .then(() => {
 
    seedMeals();
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

// Import routes
const mealsRoutes = require("./routes/meals.routes");
app.use("/api/meals", mealsRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));

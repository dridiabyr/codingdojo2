const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/mongoose.config");  // Import the connectDB function


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json()); 

connectDB()
  

// Import routes
const mealsRoutes = require("./routes/note.routes");
app.use("/api/notes", mealsRoutes);

// Start the server
app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
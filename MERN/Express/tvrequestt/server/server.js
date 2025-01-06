require("dotenv").config();
const express = require("express");
const { tvShows } = require("../models/tv.model"); // Importing the tvShows array

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json()); // Correct usage of express.json() middleware

// Route to get all TV shows
app.get("/tvshows", (req, res) => {
  res.json(tvShows);
});

// Route to get TV shows by year
app.get("/tvshows/:year", (req, res) => {
  const year = parseInt(req.params.year);
  const filteredShows = tvShows.filter((show) => show.yearCreated === year);
  res.json(filteredShows);
});

// Route to delete a TV show by title
app.delete("/tvshows/:title", (req, res) => {
  const title = req.params.title;
  console.log("Deleting TV show with title:", title); // Log the title to ensure it's being passed correctly
  
  const index = tvShows.findIndex((show) => show.tvShow === title);

  // Check if show is found
  if (index === -1) {
    return res.status(404).json({ message: "TV show not found" });
  }

  tvShows.splice(index, 1); // Remove the show from the array
  res.json(tvShows); // Return the updated list
});
// Route to update a TV show's starring property
app.patch("/tvshows/:title", (req, res) => {
  const title = req.params.title;
  const { starring } = req.body;

  const show = tvShows.find((show) => show.tvShow === title);
  if (!show) {
    return res.status(404).json({ message: "TV show not found" });
  }

  show.starring = starring; // Update the starring array
  res.json(show); // Return the updated show
});

// Route to add a new TV show
app.post("/tvshows", (req, res) => {
  const { tvShow, yearCreated, genre, starring } = req.body;
  const newShow = { tvShow, yearCreated, genre, starring };
  tvShows.push(newShow); // Add the new show to the array
  res.status(201).json(newShow); // Return the new show
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

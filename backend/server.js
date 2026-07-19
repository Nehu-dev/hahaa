const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipe.route");


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.use("/api/recipes", recipeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Recipe API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
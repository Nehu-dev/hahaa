const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth.route");
const connectDB = require("./config/db");
const recipeRoutes = require("./routes/recipe.route");
const uploadRoutes = require("./routes/upload.route");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

app.use("/api/recipes", recipeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Recipe API is Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
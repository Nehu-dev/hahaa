const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const {
  getRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipe.controller");

router.get("/", getRecipes);

router.post("/", protect, createRecipe);
router.put("/:id", protect, updateRecipe);
router.delete("/:id", protect, deleteRecipe);

module.exports = router;
const express = require("express");
const router = express.Router();

const protect = require("../middleware/auth.middleware");

const {
  getRecipes,
  getMyRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
  addReview,
  toggleFavorite,
} = require("../controllers/recipe.controller");

router.get("/", getRecipes);

router.post("/", protect, createRecipe);
router.get("/my-recipes", protect, getMyRecipes);
router.put("/:id", protect, updateRecipe);
router.delete("/:id", protect, deleteRecipe);
router.post("/:id/reviews", protect, addReview);
router.put("/:id/favorite", protect, toggleFavorite);

module.exports = router;
const express = require("express");
const router = express.Router();

const {
  getRecipes,
  createRecipe,
  updateRecipe,
} = require("../controllers/recipe.controller");

router.get("/", getRecipes);
router.post("/", createRecipe);
router.put("/:id", updateRecipe);

module.exports = router;
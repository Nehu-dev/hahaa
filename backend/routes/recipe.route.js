const express = require("express");
const router = express.Router();

const {
  getRecipes,
  createRecipe,
} = require("../controllers/recipe.controller");

router.get("/", getRecipes);
router.post("/", createRecipe);

module.exports = router;
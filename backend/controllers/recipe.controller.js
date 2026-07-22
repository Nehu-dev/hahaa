const Recipe = require("../models/recipe.model");

// GET all recipes
const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST a new recipe
const createRecipe = async (req, res) => {
  try {
    const recipe = new Recipe({
      ...req.body,
      user: req.user.id,
    });

    const savedRecipe = await recipe.save();

    res.status(201).json(savedRecipe);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    // Check ownership
    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only edit your own recipes.",
      });
    }

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.json(updatedRecipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


const deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    
    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    // Check ownership
    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only delete your own recipes.",
      });
    }

    await Recipe.findByIdAndDelete(req.params.id);

    res.json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
};
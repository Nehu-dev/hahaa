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
  console.log("🔥 Delete controller reached");
  console.log("ID:", req.params.id);
  console.log("User:", req.user);

  try {
    const recipe = await Recipe.findById(req.params.id);

    console.log("Recipe Found:", recipe);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({
        message: "You can only delete your own recipes.",
      });
    }

    await Recipe.findByIdAndDelete(req.params.id);
    console.log("✅ Deleted successfully");

    res.json({
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMyRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find({
      user: req.user.id,
    });

    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const addReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;

    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    // Prevent users from reviewing their own recipe
    if (recipe.user.toString() === req.user.id.toString()) {
      return res.status(400).json({
        message: "You cannot review your own recipe.",
      });
    }

    // Check if user already reviewed
    console.log("Recipe reviews:", recipe.reviews);
    const alreadyReviewed = recipe.reviews.find(
      (review) => review.user && review.user.toString() === req.user.id
    );

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You have already reviewed this recipe.",
      });
    }

    console.log("req.user =", req.user);
    const review = {
    user: req.user.id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

    recipe.reviews.push(review);

    recipe.rating =
      recipe.reviews.reduce((acc, item) => acc + item.rating, 0) /
      recipe.reviews.length;

    await recipe.save();

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const toggleFavorite = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);

    if (!recipe) {
      return res.status(404).json({
        message: "Recipe not found",
      });
    }

    const userId = req.user.id;

    const alreadyFavorite = recipe.favorites.includes(userId);

    if (alreadyFavorite) {
      recipe.favorites = recipe.favorites.filter(
        (id) => id.toString() !== userId
      );
    } else {
      recipe.favorites.push(userId);
    }

    await recipe.save();

    res.json(recipe);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  getRecipes,
  getMyRecipes,
  createRecipe,
  deleteRecipe,
  updateRecipe,
  addReview,
  toggleFavorite,
};
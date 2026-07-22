const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    cookTime: {
      type: String,
    },

    servings: {
      type: Number,
    },

    difficulty: {
      type: String,
    },

    category: {
      type: String,
    },

    ingredients: {
      type: [String],
      default: [],
    },

    instructions: {
      type: [String],
      default: [],
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    isFavorite: {
      type: Boolean,
      default: false,
    },
    user: {
  type: require("mongoose").Schema.Types.ObjectId,
  ref: "User",
  required: true,
},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Recipe", recipeSchema);
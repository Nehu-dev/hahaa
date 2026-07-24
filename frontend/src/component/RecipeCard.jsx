import React from "react";
import { Heart, Clock, Users, Pencil, Trash2 } from "lucide-react";
import RatingStars from "./RatingStars";

export default function RecipeCard({
  recipe,
  currentUser,
  toggleFavorite,
  renderStars,
  setSelectedRecipe,
  setCurrentPage,
  setEditingRecipe,
  setNewRecipe,
  setShowAddRecipe,
  handleDeleteRecipe,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition">
      {/* Image */}
      <div className="relative">
        <img
          src={
            recipe.image && recipe.image.trim() !== ""
              ? recipe.image
              : "https://placehold.co/600x400?text=No+Image"
          }
          alt={recipe.title}
          className="w-full h-48 object-cover"
        />

        <button
          onClick={() => toggleFavorite(recipe._id)}
          className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
        >
          <Heart
            className={`w-5 h-5 ${
              recipe.isFavorite
                ? "fill-rose-500 text-rose-500"
                : "text-gray-400"
            }`}
          />
        </button>

        <div className="absolute bottom-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium">
          {recipe.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center">
            <RatingStars rating={recipe.rating} />
            <span className="ml-2 text-sm text-gray-500">
              ({recipe.reviews})
            </span>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              recipe.difficulty === "Easy"
                ? "bg-green-100 text-green-700"
                : recipe.difficulty === "Medium"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {recipe.difficulty}
          </span>
        </div>

        <div className="flex justify-between items-center mb-5">
          <div className="flex space-x-4 text-gray-500 text-sm">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {recipe.cookTime}
            </div>

            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              {recipe.servings}
            </div>
          </div>
        </div>

        <div className="flex justify-between gap-2">
          {recipe.user === currentUser?.id && (
            <>
              <button
                onClick={() => {
                  setEditingRecipe(recipe);

                  setNewRecipe({
                    title: recipe.title,
                    description: recipe.description,
                    image: recipe.image,
                    cookTime: recipe.cookTime,
                    servings: recipe.servings,
                    difficulty: recipe.difficulty,
                    category: recipe.category,
                    ingredients: recipe.ingredients,
                    instructions: recipe.instructions,
                  });

                  setShowAddRecipe(true);
                }}
                className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
              >
                <Pencil className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDeleteRecipe(recipe._id)}
                className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </>
          )}

          <button
            onClick={() => {
              setSelectedRecipe(recipe);
              setCurrentPage("recipe-detail");
            }}
            className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700"
          >
            View Recipe
          </button>
        </div>
      </div>
    </div>
  );
}
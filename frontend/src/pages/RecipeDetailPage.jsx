import React from "react";
import { Heart, Clock, Users, ChefHat } from "lucide-react";
import RatingStars from "../component/RatingStars";

export default function RecipeDetailPage({
  selectedRecipe,
  setCurrentPage,
  toggleFavorite,
  renderStars,
}) 
{
    if (!selectedRecipe) return null;

    return (
      <div className="min-h-screen bg-green-100">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <button
            onClick={() => setCurrentPage('recipes')}
            className="mb-6 text-rose-600 hover:text-rose-700 flex items-center space-x-2"  >
            <span>← Back to Recipes</span>
          </button>

         <div className="bg-white rounded-2xl shadow-lg overflow-hidden grid lg:grid-cols-[40%_60%]">
          {/* Left Side - Image */}
          <div className="h-[650px] bg-gray-100 flex items-center justify-center overflow-hidden">
            <img src={selectedRecipe.image}  alt={selectedRecipe.title} className="w-full h-full object-contain" />
          </div>

          {/* Right Side - Content */}
          <div className="p-8 overflow-y-auto h-[650px]">
            <div className="flex justify-between items-start mb-6">
              <div><h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedRecipe.title}</h1>
              <p className="text-lg text-gray-600 mb-4">{selectedRecipe.description}</p>
              <div className="flex items-center gap-2 mb-6">
              <RatingStars rating={selectedRecipe.rating} />
              <span className="text-gray-600">
              ({selectedRecipe.reviews} reviews)
              </span>
        </div>
      </div>

      <button
        onClick={() => toggleFavorite(selectedRecipe._id)}
        className="p-3 bg-gray-100 rounded-full hover:bg-gray-200"  >
        <Heart
          className={`w-6 h-6 ${
            selectedRecipe.isFavorite
              ? "fill-rose-500 text-rose-500"
              : "text-gray-400" }`} />
      </button>
    </div>

    {/* Info Cards */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <Clock className="w-6 h-6 text-rose-600 mx-auto mb-2" />
        <h3 className="font-semibold">{selectedRecipe.cookTime}</h3>
        <p className="text-gray-500 text-sm">Cook Time</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <Users className="w-6 h-6 text-rose-600 mx-auto mb-2" />
        <h3 className="font-semibold">{selectedRecipe.servings}</h3>
        <p className="text-gray-500 text-sm">Servings</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <ChefHat className="w-6 h-6 text-rose-600 mx-auto mb-2" />
        <h3 className="font-semibold">{selectedRecipe.difficulty}</h3>
        <p className="text-gray-500 text-sm">Difficulty</p>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 text-center">
        <span className="text-2xl">🍽️</span>
        <h3 className="font-semibold mt-2">{selectedRecipe.category}</h3>
        <p className="text-gray-500 text-sm">Category</p>
      </div>

    </div>

    {/* Ingredients & Instructions */}
    <div className="grid lg:grid-cols-2 gap-8">

      <div>
        <h2 className="text-2xl font-bold mb-5">Ingredients</h2>

        <ul className="space-y-3">
          {selectedRecipe.ingredients.map((ingredient, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
              <span>{ingredient}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-5">Instructions</h2>

        <div className="space-y-5">
          {selectedRecipe.instructions.map((instruction, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                {index + 1}
              </div>

              <p>{instruction}</p>
            </div>
          ))}
        </div>
      </div>
       </div>
    </div>
    </div>
  </div>
</div>
);
}
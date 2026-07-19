import React from 'react'
import { Heart } from "lucide-react";

export default function FavoritesPage({
  favoriteRecipes,
  setSelectedRecipe,
  setCurrentPage,
  toggleFavorite,
  renderStars,
}) {
  return (
    <div className="min-h-screen bg-yellow-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Your Favorite Recipes</h1>
        {favoriteRecipes.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No favorites yet</h2>
            <p className="text-gray-500 mb-8">Start adding recipes to your favorites to see them here</p>
            <button
              onClick={() => setCurrentPage('recipes')}
              className="bg-rose-600 text-white px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
            >
              Explore Recipes
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favoriteRecipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(recipe.id)}
                    className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
                  >
                    <Heart className="w-5 h-5 fill-rose-500 text-rose-500" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{recipe.description}</p>
                  <button
                    onClick={() => {
                      setSelectedRecipe(recipe);
                      setCurrentPage('recipe-detail');
                    }}
                    className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition-colors"
                  >
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
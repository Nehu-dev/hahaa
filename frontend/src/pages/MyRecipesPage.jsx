import React from "react";
import RecipeCard from "../component/RecipeCard";

export default function MyRecipesPage({
  recipes,
  currentUser,
  toggleFavorite,
  setSelectedRecipe,
  setCurrentPage,
  setEditingRecipe,
  setNewRecipe,
  setShowAddRecipe,
  handleDeleteRecipe,
}) {
  return (
    <div className="min-h-screen bg-red-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">
          My Recipes
        </h1>

        {recipes.length === 0 ? (
          <div className="bg-white rounded-xl p-10 text-center">
            <h2 className="text-2xl font-semibold">
              You haven't added any recipes yet.
            </h2>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe._id}
                recipe={recipe}
                currentUser={currentUser}
                toggleFavorite={toggleFavorite}
                setSelectedRecipe={setSelectedRecipe}
                setCurrentPage={setCurrentPage}
                setEditingRecipe={setEditingRecipe}
                setNewRecipe={setNewRecipe}
                setShowAddRecipe={setShowAddRecipe}
                handleDeleteRecipe={handleDeleteRecipe}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
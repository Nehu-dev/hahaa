import React from "react";
import CategoryFilter from "../component/CategoryFilter";
import RecipeCard from "../component/RecipeCard";
import SearchBar from "../component/SearchBar";


export default function RecipesPage({
  recipes,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories,
  setSelectedRecipe,
  setCurrentPage,
  toggleFavorite,
  renderStars,
  setNewRecipe,
  setShowAddRecipe,
  setEditingRecipe,
  handleDeleteRecipe,
}) {
  const currentUser = JSON.parse(localStorage.getItem("user"));

  console.log("Current User:", currentUser);
  return (
    <div className="min-h-screen bg-red-400">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & Filter */}
        <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            
            <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}/>
          </div>
        </div>

        {/* Recipe Cards */}
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
            handleDeleteRecipe={handleDeleteRecipe}/>))}
        </div>
      </div>
    </div>
  );
}

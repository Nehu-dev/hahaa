import React from "react";
import { HomeIcon, BookOpen, Heart, Info, PlusCircle, User } from "lucide-react";
import recipe from "../assest/logo.png";

export default function Navigation({
  currentPage,
  setCurrentPage,
  setShowAddRecipe,
  setIsLoggedIn,
  setEditingRecipe,
  setNewRecipe,
}) {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img  src={recipe} alt="" className=" pt-2 w-20 h-20" />
            <h1 className="text-2xl font-bold text-red-600 font-['Mali']">BiteBloom</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600'
              }`}
            >
              <HomeIcon className="w-4 h-4" /> {/* <-- changed here */}
              <span>Home</span>
            </button>
            <button
              onClick={() => setCurrentPage('recipes')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'recipes' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Recipes</span>
            </button>
            <button
              onClick={() => setCurrentPage('favorites')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'favorites' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Favorites</span>
            </button>
            <button
              onClick={() => setCurrentPage('about')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'about' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About Us</span>
            </button>
            <button
              onClick={() => {
  setEditingRecipe(null);

  setNewRecipe({
    title: "",
    description: "",
    image: "",
    cookTime: "",
    servings: "",
    difficulty: "Easy",
    category: "Main Course",
    ingredients: [""],
    instructions: [""],
  });

  setShowAddRecipe(true);
}}
              className="flex items-center space-x-1 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Add Recipe</span>
            </button>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="flex items-center space-x-1 text-gray-600 hover:text-rose-600 px-3 py-2 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}


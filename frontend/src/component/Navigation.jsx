import React from "react";
import { HomeIcon, BookOpen, Heart, Info, PlusCircle, User, ChefHat } from "lucide-react";
import recipe from "../assest/logo.png";

export default function Navigation({
  currentPage,
  setCurrentPage,
  setShowAddRecipe,
  setIsLoggedIn,
  setEditingRecipe,
  setNewRecipe,
   setRecipes,
  setSelectedRecipe,
}) {
  return (
    <nav className="sticky top-0 z-50 px-4 pt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg px-6 h-16 flex items-center ">
          
          {/* Logo */}
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-2 mr-8">
            <img src={recipe} alt="BiteBloom" className="w-12 h-12 ml-4 mr-24 object-contain" />
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-10">
            <button onClick={() => setCurrentPage('home')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'home' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600' }`} >
              <HomeIcon className="w-4 h-4" /> {/* <-- changed here */}
              <span>Home</span>
            </button>
            <button onClick={() => setCurrentPage('recipes')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'recipes' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600' }`} >
              <BookOpen className="w-4 h-4" />
              <span>Recipes</span>
            </button>
            <button
              onClick={() => setCurrentPage('favorites')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'favorites' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600' }`} >
              <Heart className="w-4 h-4" />
              <span>Favorites</span>
            </button>
            <button onClick={() => setCurrentPage('about')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                currentPage === 'about' ? 'bg-rose-100 text-rose-600' : 'text-gray-600 hover:text-rose-600' }`} >
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
                  instructions: [""],});
                  setShowAddRecipe(true);}}
              className="flex items-center space-x-1 bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700 transition-colors" >
              <PlusCircle className="w-4 h-4" />
              <span>Add Recipe</span>
            </button>

            <button onClick={() => setCurrentPage("my-recipes")}
            className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
              currentPage === "my-recipes" ? "bg-rose-100 text-rose-600"
              : "text-gray-600 hover:text-rose-600"}`}>
                <ChefHat className="w-4 h-4" />
                <span>My Recipes</span>
            </button>
            
            <button onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              setRecipes([]);
              setSelectedRecipe(null);
              setCurrentPage("home");
              setIsLoggedIn(false);}}
              className="flex items-center space-x-1 text-gray-600 hover:text-rose-600 px-3 py-2 rounded-lg transition-colors" >
              <User className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
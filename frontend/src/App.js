import { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipeModal from "./component/AddRecipeModal";
import { getRecipes, addRecipe } from "./services/recipeService";
import { Star } from "lucide-react";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
  fetchRecipes();
}, []);

const fetchRecipes = async () => {
  try {
    const data = await getRecipes();
    setRecipes(data);
  } catch (error) {
    console.error("Error fetching recipes:", error);
  }
};
    
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const categories = ["All", "Main Course", "Dessert", "Salad"];

  const filteredRecipes = recipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  const favoriteRecipes = recipes.filter(recipe => recipe.isFavorite);

const [newRecipe, setNewRecipe] = useState({
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

const addIngredient = () => {
  setNewRecipe(prev => ({
    ...prev,
    ingredients: [...prev.ingredients, '']
  }));
};

const removeIngredient = (index) => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

const updateInstruction = (index, value) => {
    setNewRecipe(prev => ({
      ...prev,
      instructions: prev.instructions.map((inst, i) => i === index ? value : inst)
    }));
  };

const addInstruction = () => {
    setNewRecipe(prev => ({
      ...prev,
      instructions: [...prev.instructions, '']
    }));
  };

const removeInstruction = (index) => {
    setNewRecipe(prev => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index)
    }));
  };

const updateIngredient = (index, value) => {
    setNewRecipe(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ing, i) => i === index ? value : ing)
    }));
  };

  const submitNewRecipe = async () => {
    if (newRecipe.title && newRecipe.description) {
      const recipe = {
        ...newRecipe,
        id: recipes.length + 1,
        rating: 0,
        reviews: 0,
        isFavorite: false,
        ingredients: newRecipe.ingredients.filter(ing => ing.trim() !== ''),
        instructions: newRecipe.instructions.filter(inst => inst.trim() !== '')
      };
      await addRecipe(recipe);
      fetchRecipes();
      setNewRecipe({
        title: '',
        description: '',
        image: '',
        cookTime: '',
        servings: '',
        difficulty: 'Easy',
        category: 'Main Course',
        ingredients: [''],
        instructions: ['']
      });
      setShowAddRecipe(false);
      setCurrentPage('recipes');
    }
  };

const toggleFavorite = (recipeId) => {
  setRecipes(prev => prev.map(recipe => 
    recipe.id === recipeId ? { ...recipe, isFavorite: !recipe.isFavorite } : recipe
  ));
};

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };


  if (!isLoggedIn) {
  return <LoginPage setIsLoggedIn={setIsLoggedIn} />;
}
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setShowAddRecipe={setShowAddRecipe}
  setIsLoggedIn={setIsLoggedIn}/>

      {currentPage === "home" && (<HomePage setCurrentPage={setCurrentPage} />)}
      {currentPage === "recipes" && <RecipesPage
  recipes={filteredRecipes}
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  selectedCategory={selectedCategory}
  setSelectedCategory={setSelectedCategory}
  categories={categories}
  setSelectedRecipe={setSelectedRecipe}
  setCurrentPage={setCurrentPage}
  toggleFavorite={toggleFavorite}
  renderStars={renderStars}
  setNewRecipe={setNewRecipe}
  setShowAddRecipe={setShowAddRecipe}
  />}
      {currentPage === "favorites" && <FavoritesPage
  favoriteRecipes={favoriteRecipes}
  setSelectedRecipe={setSelectedRecipe}
  setCurrentPage={setCurrentPage}
  toggleFavorite={toggleFavorite}
  renderStars={renderStars}
/>}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "recipe-detail" && (<RecipeDetailPage selectedRecipe={selectedRecipe} 
      setCurrentPage={setCurrentPage} toggleFavorite={toggleFavorite} renderStars={renderStars} />)}

      {showAddRecipe && (
  <AddRecipeModal
    setShowAddRecipe={setShowAddRecipe}
    newRecipe={newRecipe}
    setNewRecipe={setNewRecipe}
    categories={categories}
    addIngredient={addIngredient}
    removeIngredient={removeIngredient}
    updateIngredient={updateIngredient}
    addInstruction={addInstruction}
    removeInstruction={removeInstruction}
    updateInstruction={updateInstruction}
    submitNewRecipe={submitNewRecipe}/>)}
    </div>
  );
}

export default App;
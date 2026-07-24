import { useState, useEffect } from "react";
import Navigation from "./component/Navigation";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import FavoritesPage from "./pages/FavoritesPage";
import AboutPage from "./pages/AboutPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import AddRecipeModal from "./component/AddRecipeModal";
import { getRecipes, getMyRecipes, addRecipe, updateRecipe, deleteRecipe,} from "./services/recipeService";
import RegisterPage from "./pages/RegisterPage";
import MyRecipesPage from "./pages/MyRecipesPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showAddRecipe, setShowAddRecipe] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authPage, setAuthPage] = useState("login");

  const [recipes, setRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const [editingRecipe, setEditingRecipe] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const categories = ["All", "Main Course", "Dessert", "Salad"];

  const fetchRecipes = async () => {
    try {
      const data = await getRecipes();
      data.forEach((recipe) => {
        console.log(
          "Recipe:",
          recipe.title,
          "Owner:",
          recipe.user
        );
      });
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const fetchMyRecipes = async () => {
  try {
    const data = await getMyRecipes();
    setMyRecipes(data);
  } catch (error) {
    console.error(error);
  }
};

  useEffect(() => {
    if (isLoggedIn) {
      fetchRecipes();
      fetchMyRecipes();
      setCurrentPage("home");
      setSelectedRecipe(null);
    } else {
      setRecipes([]);
      setSelectedRecipe(null);
      setCurrentPage("home");
    }
  }, [isLoggedIn]);
  
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
      ingredients: newRecipe.ingredients.filter(
        (ing) => ing.trim() !== ""
      ),
      instructions: newRecipe.instructions.filter(
        (inst) => inst.trim() !== ""
      ),
    };

    try {
      if (editingRecipe) {
        // UPDATE
        await updateRecipe(editingRecipe._id, recipe);
      } else {
        // ADD
        await addRecipe({
          ...recipe,
          rating: 0,
          reviews: 0,
          isFavorite: false,
        });
      }
      await fetchRecipes();
      await fetchMyRecipes();
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
      setShowAddRecipe(false);
      setCurrentPage("recipes");
    } catch (err) {
      console.log(err);
    }
  }
};

// 

const handleDeleteRecipe = async (id) => {
  console.log("Deleting ID:", id);

  const confirmDelete = window.confirm(
    "Are you sure you want to delete this recipe?"
  );

  if (!confirmDelete) return;

  try {
    await deleteRecipe(id);
    await fetchRecipes();
    await fetchMyRecipes();

    if (selectedRecipe?._id === id) {
      setSelectedRecipe(null);
      setCurrentPage("recipes");
    }
  } catch (error) {
    console.log("Status:", error.response?.status);
    console.log("Response:", error.response?.data);
    console.log(error);
  }
};

const toggleFavorite = (recipeId) => {
  setRecipes((prev) =>
    prev.map((recipe) =>
      recipe._id === recipeId
        ? { ...recipe, isFavorite: !recipe.isFavorite }
        : recipe
    )
  );

  setSelectedRecipe((prev) =>
    prev && prev._id === recipeId
      ? { ...prev, isFavorite: !prev.isFavorite }
      : prev
  );
};

if (!isLoggedIn) {
  return authPage === "login" ? (
    <LoginPage setIsLoggedIn={setIsLoggedIn} setAuthPage={setAuthPage} /> ) : (
    <RegisterPage setAuthPage={setAuthPage} /> );}
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} setShowAddRecipe={setShowAddRecipe}
       setIsLoggedIn={setIsLoggedIn} setEditingRecipe={setEditingRecipe} setNewRecipe={setNewRecipe} setRecipes={setRecipes}
        setSelectedRecipe={setSelectedRecipe}/>

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
        setNewRecipe={setNewRecipe}
        setShowAddRecipe={setShowAddRecipe}
        setEditingRecipe={setEditingRecipe}
        handleDeleteRecipe={handleDeleteRecipe}/>}
        
        {currentPage === "my-recipes" && (<MyRecipesPage
        recipes={myRecipes}
        currentUser={JSON.parse(localStorage.getItem("user"))}
        toggleFavorite={toggleFavorite}
        setSelectedRecipe={setSelectedRecipe}
        setCurrentPage={setCurrentPage}
        setEditingRecipe={setEditingRecipe}
        setNewRecipe={setNewRecipe}
        setShowAddRecipe={setShowAddRecipe}
        handleDeleteRecipe={handleDeleteRecipe}/>)}

        {currentPage === "favorites" && <FavoritesPage
        favoriteRecipes={favoriteRecipes}
        setSelectedRecipe={setSelectedRecipe}
        setCurrentPage={setCurrentPage}
        toggleFavorite={toggleFavorite}/>}

      {currentPage === "about" && <AboutPage />}

      {currentPage === "recipe-detail" && (<RecipeDetailPage selectedRecipe={selectedRecipe} 
      setCurrentPage={setCurrentPage} toggleFavorite={toggleFavorite} />)}

      {showAddRecipe && (<AddRecipeModal
      editingRecipe={editingRecipe}
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
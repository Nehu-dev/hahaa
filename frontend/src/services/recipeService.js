import axios from "axios";

const API_URL = "https://recipe-oxp3.onrender.com/api/recipes";

const getAuthConfig = () => {
  const token = localStorage.getItem("token");

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

// Get all recipes
export const getRecipes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add recipe
export const addRecipe = async (recipe) => {
  const response = await axios.post(
  API_URL,
  recipe,
  getAuthConfig()
);
  return response.data;
};

// Update recipe
export const updateRecipe = async (id, recipe) => {
  const response = await axios.put(
  `${API_URL}/${id}`,
  recipe,
  getAuthConfig()
);
  return response.data;
};

// Delete recipe
export const deleteRecipe = async (id) => {
 const response = await axios.delete(
  `${API_URL}/${id}`,
  getAuthConfig()
);
  return response.data;
};

//Get My recipe
export const getMyRecipes = async () => {
  const response = await axios.get(
    `${API_URL}/my-recipes`,
    getAuthConfig()
  );

  return response.data;
};

//Review
export const addReview = async (recipeId, reviewData) => {
  const response = await axios.post(
    `${API_URL}/${recipeId}/reviews`,
    reviewData,
    getAuthConfig()
  );

  return response.data;
};

//Favourite
export const toggleFavoriteRecipe = async (id) => {
  const response = await axios.put(
    `${API_URL}/${id}/favorite`,
    {},
    getAuthConfig()
  );

  return response.data;
};
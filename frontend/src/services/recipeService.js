import axios from "axios";

const API_URL = "http://localhost:5000/api/recipes";

// Get all recipes
export const getRecipes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Add recipe
export const addRecipe = async (recipe) => {
  const response = await axios.post(API_URL, recipe);
  return response.data;
};

// Update recipe
export const updateRecipe = async (id, recipe) => {
  const response = await axios.put(`${API_URL}/${id}`, recipe);
  return response.data;
};

// Delete recipe
export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
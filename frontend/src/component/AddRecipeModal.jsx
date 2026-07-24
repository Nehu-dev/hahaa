import React from "react";
import { X, Plus } from "lucide-react";

export default function AddRecipeModal({
  editingRecipe,
  setShowAddRecipe,
  newRecipe,
  setNewRecipe,
  categories,
  addIngredient,
  removeIngredient,
  updateIngredient,
  addInstruction,
  removeInstruction,
  updateInstruction,
  submitNewRecipe,
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-300 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      
        <div className="p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold"> {editingRecipe ? "Edit Recipe" : "Add New Recipe"}</h2>
          <button onClick={() => setShowAddRecipe(false)}
            className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Recipe Title</label>
              <input type="text" value={newRecipe.title}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, title: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Enter recipe title"/>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Image URL</label>
              <input type="url" value={newRecipe.image}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, image: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="Enter image URL" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description</label>
            <textarea value={newRecipe.description}
              onChange={(e) => setNewRecipe(prev => ({ ...prev, description: e.target.value }))}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 h-24"
              placeholder="Describe your recipe" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Cook Time</label>
              <input type="text" value={newRecipe.cookTime}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, cookTime: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="30 mins" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Servings</label>
              <input type="number" value={newRecipe.servings}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, servings: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                placeholder="4" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Difficulty</label>
              <select value={newRecipe.difficulty}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, difficulty: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" >
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Category</label>
              <select value={newRecipe.category}
                onChange={(e) => setNewRecipe(prev => ({ ...prev, category: e.target.value }))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500" >
                {categories.slice(1).map(category => (
                  <option key={category} value={category}>{category}</option> ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Ingredients</label>
            <div className="space-y-3">
              {newRecipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <input type="text" value={ingredient}
                    onChange={(e) => updateIngredient(index, e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    placeholder="Enter ingredient" />
                  {newRecipe.ingredients.length > 1 && (
                    <button
                      onClick={() => removeIngredient(index)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-lg" >
                      <X className="w-5 h-5" />
                    </button> )}
                </div> ))}
              <button
                onClick={addIngredient}
                className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium" >
                <Plus className="w-4 h-4" />
                <span>Add Ingredient</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Instructions</label>
            <div className="space-y-3">
              {newRecipe.instructions.map((instruction, index) => (
                <div key={index} className="flex gap-2">
                  <div className="w-8 h-8 bg-rose-600 text-white rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 mt-2">
                    {index + 1}
                  </div>
                  <textarea value={instruction} onChange={(e) => updateInstruction(index, e.target.value)}
                    className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 h-20"
                    placeholder="Enter instruction step" />
                  {newRecipe.instructions.length > 1 && (
                    <button onClick={() => removeInstruction(index)}
                      className="p-3 text-red-500 hover:bg-red-50 rounded-lg mt-2" >
                      <X className="w-5 h-5" />
                    </button> )}
                </div> ))}
              <button
                onClick={addInstruction}
                className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium" >
                <Plus className="w-4 h-4" />
                <span>Add Instruction</span>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 border-t bg-gray-50 flex justify-end space-x-4">
          <button onClick={() => setShowAddRecipe(false)}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" >
            Cancel
          </button>
          <button onClick={submitNewRecipe}
            className="px-6 py-3 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors" >
            {editingRecipe ? "Update Recipe" : "Add Recipe"}
          </button>
        </div>
      </div>
    </div>
  )
}
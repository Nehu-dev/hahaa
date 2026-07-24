import React from "react";
import { Filter } from "lucide-react";

export default function CategoryFilter({
  categories,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="flex items-center space-x-2">
      <Filter className="w-5 h-5 text-gray-600" />
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500" >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option> ))}
      </select>
    </div>
  );
}
 import React from 'react'
 import food from '../assest/food4.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-full  bg-blue-100">
      <div className="absolute h-80 inset-0 bg-cover  bg-center bg-no-repeat" style={{ backgroundImage:`url('${food}')`,  }} >
        
        {/* Hero Section */}
          <div className="text-center max-w-7xl mx-auto px-4 py-24">
            <h1 className="text-5xl md:text-6xl  text-white font-bold font-['Mali'] mb-6">About RecipeWorld</h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Connecting food lovers from around the world through the joy of cooking
            </p>
          </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-64">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10"> Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Disha */}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              DH
            </div>
            <h3 className="text-lg font-semibold">Disha</h3>
            <p className="text-rose-600 text-sm mb-2">Founder & CEO</p>
            <p className="text-gray-600 text-sm">
              Former chef turned tech entrepreneur with a passion for
              democratizing cooking knowledge.
            </p>
          </div>

          {/* Dhirthi */}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              DH
            </div>
            <h3 className="text-lg font-semibold">Dhirthi</h3>
            <p className="text-rose-600 text-sm mb-2">Head Chef</p>
            <p className="text-gray-600 text-sm">
              Michelin-starred chef specializing in recipe development and
              culinary innovation.
            </p>
          </div>

          {/* Neha */}
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
              NA
            </div>
            <h3 className="text-lg font-semibold">Neha</h3>
            <p className="text-rose-600 text-sm mb-2">Tech Lead</p>
            <p className="text-gray-600 text-sm">
              Full-stack developer ensuring our platform delivers the best user
              experience possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
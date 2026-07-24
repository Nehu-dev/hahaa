import React from 'react'
import food from '../assest/food4.jpg';

export default function AboutPage() {
  return (
    <div className="min-h-full  bg-blue-100">
      <div 
      className="absolute h-80 inset-0 bg-cover  bg-center bg-no-repeat"
      style={{
        backgroundImage:`url('${food}')`,  }} >
      {/* Hero Section */}
          <div className="text-center max-w-7xl mx-auto px-4 py-24">
            <h1 className="text-5xl md:text-6xl  text-white font-bold font-['Mali'] mb-6">
              About RecipeWorld
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
              Connecting food lovers from around the world through the joy of cooking
            </p>
          </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At RecipeWorld, we believe that cooking is more than just preparing food—it's about creating memories, 
            sharing culture, and bringing people together. Our platform empowers home cooks of all skill levels 
            to discover, share, and perfect their culinary creations in a supportive community environment.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DH
              </div>
              <h3 className="text-lg font-semibold mb-2">Disha</h3>
              <p className="text-rose-700 text-sm mb-2">Founder & CEO</p>
              <p className="text-gray-900 text-sm">
                Former chef turned tech entrepreneur with a passion for democratizing cooking knowledge.
              </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                DH
              </div>
              <h3 className="text-lg font-semibold mb-2">Dhirthi</h3>
              <p className="text-rose-700 text-sm mb-2">Head Chef</p>
              <p className="text-gray-900 text-sm">
                Michelin-starred chef specializing in recipe development and culinary innovation.
              </p>
          </div>
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                NA
              </div>
              <h3 className="text-lg font-semibold mb-2">Neha</h3>
              <p className="text-rose-700 text-sm mb-2">Tech Lead</p>
              <p className="text-gray-900 text-sm">
                Full-stack developer ensuring our platform delivers the best user experience possible.
              </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

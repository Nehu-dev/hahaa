import React from 'react'
import food2 from  '../assest/image1.jpg';

function HomePage({ setCurrentPage }) {
  return (
    <div className="min-h-screen">
       <div  className="absolute inset-0 bg-cover  bg-center bg-no-repeat"
      style={{
        backgroundImage:`url('${food2}')`,
      }} >
      {/* Hero Section */}
      <div className=" text-white">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl mt-40 font-bold font-['Mali'] mb-4">
              Discover Amazing Recipes
            </h1>
            <p className="text-xl md:text-2xl mb-16 max-w-3xl mx-auto">
              From quick weeknight dinners to impressive desserts, find your  next favorite dish
            </p>
            <button
              onClick={() => setCurrentPage('recipes')}
              className="bg-white text-rose-600 px-8 py-4 mt-14 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors" >
              Explore Recipes
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage
import React from 'react';
import icon from './page.png';
import icon1 from './group.png';
import icon2 from './shopping-bag.png';
const CoreValues = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-blue-600 text-center text-3xl sm:text-4xl lg:text-6xl font-bold mb-8 lg:mb-12">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Vision Card */}
          <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
            <div className='w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6 bg-blue-700 rounded-full'>
              <img 
              src={icon}
              alt="Vision Icon"
              className="lg:w-28 lg:h-28 object-contain mb-6 transition-transform duration-300"
            />
          </div>
            
            
            <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Forge a society where science is accessible, inclusive, and an essential part of daily life.
            </p>
          </div>
          
          {/* Mission Card */}
          <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
           <div className='w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6 bg-yellow-300 rounded-full'>
            <img
              src={icon2}
              alt="Mission Icon"
              className="w-5rem h-5rem lg:w-28 lg:h-28 object-contain mb-6 transition-transform duration-300"
            />
            </div>
            <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Equity, connectivity, creativity, sustainability, inclusivity: we embody these values to empower education and create opportunity.
            </p>
          </div>
          
          {/* Values Card */}
          <div className="flex flex-col items-center bg-blue-400 bg-opacity-40 p-8 lg:p-12 rounded-3xl text-center md:col-span-2 lg:col-span-1 transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
           <div className='w-20 h-20 lg:w-28 lg:h-28 object-contain mb-6 bg-blue-400 rounded-full'>
            <img
              src={icon1}
              alt="Values Icon"
              className="w-5rem h-5rem lg:w-28 lg:h-28 object-contain mb-6 transition-transform duration-300"
            />
          </div>
            <h3 className="text-blue-600 text-2xl lg:text-3xl xl:text-4xl font-bold mb-4">
              Our Values
            </h3>

            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
              Fostering innovation, demystifying science and math fears, and sharing knowledge with all.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoreValues
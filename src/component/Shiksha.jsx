import React, { useState } from 'react';

const ShikshaWebsite = () => {
  const [hoveredRobot, setHoveredRobot] = useState(null);

  const robotFeatures = {
    robot1: [
      "Real-time learning analytics",
      "Toy-based learning", 
      "1000+ interactive speaking charts",
      "Dynamic usage report generation"
    ],
    robot2: [
      "Visual and auditory feedback",
      "Projector connectivity",
      "Learning in native language", 
      "Report generation"
    ]
  };

  return (
   
  <div className="min-h-screen bg-white overflow-hidden">
        <section className="relative min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto w-full h-screen flex flex-col">
        <div className="flex-1 flex flex-col rounded-3xl shadow-lg overflow-hidden">
          {/* Top Half - White Background with Text */}
          <div className="flex-1 bg-white flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="text-center max-w-4xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
                <span className="text-indigo-900">SHIKSHA </span>
                <span className="text-red-500">2.0</span>
              </h1>
              <p className="text-blue-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                "The Gen 2 Spoken English Teaching Robot"
              </p>
            </div>
          </div>
          
          {/* Bottom Half - Yellow Background with Image */}
          <div className="flex-1 bg-yellow-200 flex items-center justify-center p-4 sm:p-8 lg:p-16">
            <div className="flex justify-center">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/zx7kz2jb_expires_30_days.png" 
                alt="Shiksha Robot" 
                className="w-3rem max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    
      {/* What is video Section 
       <div className="w-90% h-[60vh] md:h-[80vh] lg:h-[92vh] bg-zinc-300 rounded-3xl shadow-lg p-8 lg:p-16"></div> */}

      {/* What is Shiksha Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-sky-50 rounded-3xl shadow-lg p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/rvuwqfen_expires_30_days.png" 
                  alt="Shiksha Robot Features" 
                  className="w-full rounded-lg"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-500 text-center lg:text-left mb-8">
                  WHAT IS SHIKSHA?
                </h2>
                <p className="text-indigo-900 text-lg sm:text-xl lg:text-2xl font-black leading-relaxed">
                  Shiksha is an advanced educational robot transforming classrooms into engaging spaces using cutting-edge technology. 
                  It emphasizes interactive and playful learning, aiming to ignite children's enjoyment and extend education beyond 
                  traditional methods, fostering a dynamic and captivating approach to learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Interactive Robots */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto rounded-3xl shadow-lg p-8 lg:p-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16">
            <span className="text-indigo-900">WHY CHOOSE </span>
            <span className="text-red-500">SHIKSHA?</span>
          </h2>
          
          <div className="relative">
            {/* Central Robot Image */}
            <div className="flex justify-center mb-12">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/vljefmmx_expires_30_days.png" 
                alt="Central Shiksha Robot" 
                className="w-64 sm:w-80 lg:w-96 rounded-full shadow-xl"
              />
            </div>

            {/* Interactive Feature Robots */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              {/* Robot 1 */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredRobot('robot1')}
                onMouseLeave={() => setHoveredRobot(null)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="https://placehold.co/200x200" 
                      alt="Feature Robot 1" 
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-md"
                    />
                  </div>
                  
                  {hoveredRobot === 'robot1' && (
                    <div className="absolute inset-0 bg-indigo-900/90 rounded-2xl p-6 flex flex-col justify-center transition-all duration-300">
                      <h3 className="text-white text-xl font-bold mb-4 text-center">Key Features</h3>
                      <div className="space-y-3">
                        {robotFeatures.robot1.map((feature, index) => (
                          <div key={index} className="flex items-center text-white">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm sm:text-base font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Robot 2 */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredRobot('robot2')}
                onMouseLeave={() => setHoveredRobot(null)}
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <div className="flex justify-center mb-4">
                    <img 
                      src="https://placehold.co/200x200" 
                      alt="Feature Robot 2" 
                      className="w-32 h-32 sm:w-40 sm:h-40 rounded-full shadow-md"
                    />
                  </div>
                  
                  {hoveredRobot === 'robot2' && (
                    <div className="absolute inset-0 bg-indigo-900/90 rounded-2xl p-6 flex flex-col justify-center transition-all duration-300">
                      <h3 className="text-white text-xl font-bold mb-4 text-center">Key Features</h3>
                      <div className="space-y-3">
                        {robotFeatures.robot2.map((feature, index) => (
                          <div key={index} className="flex items-center text-white">
                            <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                            <span className="text-sm sm:text-base font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-500 text-center mb-16">
            FEATURES OF SHIKSHA
          </h2>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-neutral-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-indigo-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center">
                    A scalable and customizable teaching aid to support English learning, 
                    even in remote corners of the country.
                  </h3>
                </div>
                
                <div className="bg-neutral-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-indigo-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center">
                    Integration of technology and AI in current learning and adaptability 
                    for future readiness.
                  </h3>
                </div>
                
                <div className="bg-neutral-100 rounded-lg p-6 shadow-md">
                  <h3 className="text-indigo-900 text-xl sm:text-2xl lg:text-3xl font-bold text-center">
                    An economical and reliable solution for various gaps in English learning, 
                    proven with 100+ students.
                  </h3>
                </div>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/iv0xhfvs_expires_30_days.png" 
                  alt="Shiksha Features" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points to Ponder Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-indigo-900 mb-16">
            POINTS TO PONDER
          </h2>
        </div>
      </section>

      {/* Syllabus and Learning Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-indigo-900 text-center mb-16">
            SYLLABUS AND LEARNING
          </h2>
          
          <div className="relative">
            {/* Central Image */}
            <div className="flex justify-center mb-12">
              <img 
                src="https://placehold.co/500x500" 
                alt="Learning Modules" 
                className="w-full max-w-md sm:max-w-lg rounded-lg shadow-lg"
              />
            </div>

            {/* Learning Modules */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {/* Left Side Modules */}
              <div className="space-y-4">
                {[
                  "Everyday conversations",
                  "Basic greetings", 
                  "Introducing oneself",
                  "Common Vocabulary",
                  "Listening comprehension"
                ].map((module, index) => (
                  <div key={index} className="bg-gradient-to-r from-sky-700 to-slate-500 rounded-l-lg p-4 border-8 border-stone-300 shadow-lg">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center">
                      {module}
                    </h3>
                  </div>
                ))}
              </div>

              {/* Right Side Modules */}
              <div className="space-y-4">
                {[
                  "Role-playing Dialogues",
                  "Pronunciation Skills",
                  "Forming Sentences", 
                  "Asking Questions",
                  "Describing People & Places"
                ].map((module, index) => (
                  <div key={index} className="bg-gradient-to-r from-slate-500 to-sky-700 rounded-r-lg p-4 border-8 border-stone-300 shadow-lg">
                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold text-center">
                      {module}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8  ">
        <div className="max-w-7xl mx-auto z-10 bg-gradient-to-r from-indigo-900 to-blue-500 relative rounded-3xl shadow-lg p-8 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-8">
                Ready to Empower Your Classroom with Shiksha Robot?
              </h2>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-semibold mb-8">
                Transform the way Spoken English is taught. Contact us today to bring 
                Shiksha: The Gen 2 Spoken English Teaching Robot to your school!
              </p>
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-medium hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center mx-auto lg:mx-0">
                <span className="mr-3">📞</span>
                Contact us
              </button>
            </div>
            
            <div className="flex justify-center opacity-70">
              <img 
                src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/9w1KRIs84F/0d2z5icp_expires_30_days.png" 
                alt="Contact Us" 
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
        
        {/* Decorative line */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-64 bg-white hidden lg:block"></div>
      </section>
    </div>
  );
};

export default ShikshaWebsite;

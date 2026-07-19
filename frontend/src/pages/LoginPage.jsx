import React from "react";
import food1 from "../assest/food1.jpg";

const LoginPage = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${food1})`,
        }}
      />

      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-md mx-4 shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white font-['Mali'] mb-2">
            LOGIN
          </h1>

          <p className="text-white/80">
            Welcome back to Bitebloom Recipe
          </p>
        </div>

        <div className="space-y-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 px-4 bg-zinc-300 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full h-14 px-4 bg-zinc-300 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <button
            onClick={() => setIsLoggedIn(true)}
            className="w-full h-14 bg-rose-600 hover:bg-rose-700 rounded-full text-white text-xl font-bold uppercase transition-colors duration-200 shadow-lg"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
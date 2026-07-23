import React, { useState } from "react";
import food1 from "../assest/food1.jpg";
import { loginUser } from "../services/authService";

const LoginPage = ({
  setIsLoggedIn,
  setAuthPage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser({
        email,
        password,
      });

      // Save user data
      localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user));

      alert("Login Successful!");
      
      setAuthPage("login");

      setIsLoggedIn(true);
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-14 px-4 bg-zinc-300 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-14 px-4 bg-zinc-300 rounded-xl text-gray-800 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/50"
          />

          <button
            onClick={handleLogin}
            className="w-full h-14 bg-rose-600 hover:bg-rose-700 rounded-full text-white text-xl font-bold uppercase transition-colors duration-200 shadow-lg"
          >
            Login
          </button>
          <p className="text-center text-white mt-6">
  Don't have an account?{" "}
  <button
    onClick={() => setAuthPage("register")}
    className="text-yellow-300 font-semibold hover:underline"
  >
    Register
  </button>
</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
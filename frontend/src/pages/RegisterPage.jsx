import React, { useState } from "react";
import food1 from "../assest/food1.jpg";
import { registerUser } from "../services/authService";

const RegisterPage = ({ setAuthPage }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleRegister = async () => {
    try {
      await registerUser(form);

      alert("Registration Successful!");

      setAuthPage("login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${food1})`, }} />
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 w-full max-w-md mx-4">
        <h1 className="text-5xl text-white font-bold text-center mb-8"> REGISTER </h1>
        <div className="space-y-5">
          <input type="text" placeholder="Name" value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value }) } className="w-full p-4 rounded-xl" />
          <input type="email" placeholder="Email" value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value }) } className="w-full p-4 rounded-xl" />
          <input type="password" placeholder="Password" value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value }) } className="w-full p-4 rounded-xl" />
          <button onClick={handleRegister} className="w-full bg-rose-600 text-white py-4 rounded-xl" >
            Register
          </button>
          <p className="text-center text-white mt-6">
            Already have an account?{" "}
            <button onClick={() => setAuthPage("login")}
            className="text-yellow-300 font-semibold hover:underline">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
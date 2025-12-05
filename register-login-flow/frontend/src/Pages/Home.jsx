import React, { useState } from "react";
import { handleSuccess } from "../utils";
import { useNavigate } from "react-router";
import { ToastContainer } from "react-toastify";

const Home = () => {
  const [loggedInUser] = useState(() => {
    return localStorage.getItem("loggedInUser") || "";
  });
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    handleSuccess("User logged out successfully.");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2A00B7] to-[#42006C] px-4">
        <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#2A00B7] mb-4">
            Welcome Back
          </h2>

          {/* User Badge */}
          <div className="mb-6">
            <p className="text-lg font-semibold text-[#42006C]">
              Logged in as:
            </p>
            <span className="inline-block mt-2 px-4 py-2 text-white   text-3xl font-medium">
              <span className="bg-linear-to-bl from-[#2A00B7] to-[#42006C] bg-clip-text text-transparent">
                {loggedInUser}
              </span>
            </span>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold rounded-lg shadow-md"
          >
            Logout
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;

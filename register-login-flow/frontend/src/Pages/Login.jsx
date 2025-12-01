import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link, Navigate, useNavigate } from "react-router";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginInfo = {
      email,
      password,
    };
    //   console.log(signUpInfo);

    if (!email || !password) {
      handleError("name, email and password is required.");
    }

    try {
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo),
      });
      const result = await response.json();
      const { success, message, name } = result;
      if (success) {
        handleSuccess(message);
        localStorage.setItem('loggedInUser',name)
        setTimeout(() => {
          navigate("/home");
        }, 2000);
      } else if (!success) {
        handleError(message);
      } else {
        handleError(message);
      }
      console.log(result);
    } catch (err) {
      handleError(err);
    }
  };
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-bl from-[#2A00B7] to-[#42006C] px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg"
        >
          <div className="flex flex-col bg-white rounded-lg p-6 sm:p-8 shadow-xl">
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="font-extrabold text-[#2A00B7] text-2xl sm:text-3xl">
                Login
              </h1>
              <div className="w-16 sm:w-20 h-1 bg-[#2A00B7] mx-auto mt-2 rounded-full" />
            </div>

            {/* Inputs */}
            <div className="space-y-4 sm:space-y-5">
              {/* Email */}
              <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
                <IoIosMail className="text-[#6A0DAD]" size={22} />
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter E-mail"
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Password */}
              <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
                <MdLock className="text-[#6A0DAD]" size={22} />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            <div className="text-start mt-1">
              <p className="text-sm sm:text-base text-[#42006C]">
                Don't have an account?{" "}
                <Link
                  to="/signup"
                  className="text-[#2A00B7] font-semibold hover:underline"
                >
                  Signup
                </Link>
              </p>
            </div>

            {/* Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full sm:w-32 h-11 sm:h-12 bg-[#2A00B7] rounded-full text-white text-lg sm:text-xl font-semibold shadow-md hover:bg-[#42006C] transition"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />

    </>
  );
};

export default Login;

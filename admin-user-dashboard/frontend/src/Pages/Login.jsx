import React, { useContext, useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from "react-router";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);

  useEffect(() => {
    if (!user) return;

    if (user.role === "admin") {
      navigate("/adminDashboard");
    } else if (user.role === "user") {
      navigate("/userDashboard");
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      handleError("Email and Password is required.");
      return;
    }

    try {
      setSubmitting(true);

      const loggedInUser = await login(email, password);

      handleSuccess(
        loggedInUser.role === "admin"
          ? "Logged in as admin."
          : "Logged in as user."
      );
    } catch (err) {
      handleError(err.message || "Login Failed. Please try again later.");
    } finally {
      setSubmitting(false);
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
                />
              </div>
              {/* {!email && <p className="text-red-500">Email is required</p>} */}

              {/* Password */}
              <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
                <MdLock className="text-[#6A0DAD]" size={22} />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"

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
                disabled={submitting}
                className="w-full sm:w-48 h-11 sm:h-12 bg-[#2A00B7] rounded-full text-white text-lg sm:text-xl font-semibold shadow-md hover:bg-[#42006C] transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? "Logging in..." : "Login"}
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

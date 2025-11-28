import React, { useContext, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { useNavigate } from "react-router";
import RegisterContext from "../Context/RegisterContext";


const Register = () => {
  const [uname, setUName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const[error, setError] = useState(null)

  const { registerUser} = useContext(RegisterContext)

  const navigate = useNavigate()

  const handleRegister = (e) => {

    e.preventDefault()

    registerUser({uname, email, pass})
    navigate("/login")

  };

  return (
    <>
      <div className="min-h-screen w-full flex justify-center items-center bg-linear-to-bl from-[#2A00B7] to-[#42006C] h-screen  px-4">
        <form onSubmit={handleRegister}>
          <div className="flex flex-col bg-white rounded-lg p-6 sm:p-8 shadow-xl">
            {/* Title */}
            <div className="text-center mb-6">
              <h1 className="font-extrabold text-[#2A00B7] text-2xl sm:text-3xl">
                Registration
              </h1>
              <div className="w-32 sm:w-40 h-1 bg-[#2A00B7]  mx-auto mt-2 rounded-full"></div>
            </div>

            {/* Inputs */}
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
                <FaUser className="text-[#6A0DAD]" size={22} />
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={(e) => setUName(e.target.value)}
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Email Input */}
              <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
                <IoIosMail className="text-[#6A0DAD]" size={22} />
                <input
                  type="email"
                  placeholder="Enter E-mail"
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="flex items-center bg-gray-100 h12 sm:h-14 rounded-lg px-3 gap-3">
                <MdLock className="text-[#6A0DAD]" size={22} />
                <input
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) => setPass(e.target.value)}
                  className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 text-red-500 text-center text-sm sm:text-base">{error}</p>
            )}

            {/* Sign in Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="w-full sm:w-32 h-11 sm:h-12 bg-[#2A00B7] rounded-full text-white text-lg sm:text-xl font-semibold shadow-md hover:bg-[#42006C] transition"
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;

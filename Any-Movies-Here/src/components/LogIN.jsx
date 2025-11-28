// import React, { useContext, useState } from "react";
// import { IoIosMail } from "react-icons/io";
// import { MdLock } from "react-icons/md";
// import RegisterContext from "../Context/RegisterContext";
// import { useNavigate } from "react-router";

// const LogIN = () => {
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [error, setError] = useState(null);

//   const { checkLogin } = useContext(RegisterContext);
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     const isValid = checkLogin(email, pass);

//     if (isValid) {
//       navigate("/home", { replace: true });
//     }else {
//       setError("Invalid Login Credentials.")
//     }
//   };

//   return (
//     <>
//       <div className="flex justify-center items-center bg-linear-to-bl from-[#2A00B7] to-[#42006C] h-screen w-screen px-4">
//         <form onSubmit={handleLogin}>
//           <div className="flex flex-col bg-white rounded-lg w-[350px] md:w-[420px] p-8 shadow-xl">
//             {/* Title */}
//             <div className="text-center mb-6">
//               <h1 className="font-extrabold text-[#2A00B7] text-3xl">Login</h1>
//               <div className="w-20 h-1 bg-[#2A00B7]  mx-auto mt-2 rounded-full"></div>
//             </div>

//             {/* Inputs */}
//             <div className="space-y-5">
//               {/* Email Input */}
//               <div className="flex items-center bg-gray-100 h-14 rounded-lg px-3 gap-3">
//                 <IoIosMail className="text-[#6A0DAD]" size={24} />
//                 <input
//                   type="email"
//                   placeholder="Enter E-mail"
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="bg-transparent flex-1 text-xl outline-none text-[#42006C] placeholder:text-gray-500"
//                   required
//                 />
//               </div>

//               {/* Password Input */}
//               <div className="flex items-center bg-gray-100 h-14 rounded-lg px-3 gap-3">
//                 <MdLock className="text-[#6A0DAD]" size={24} />
//                 <input
//                   type="password"
//                   placeholder="Enter Password"
//                   onChange={(e) => setPass(e.target.value)}
//                   className="bg-transparent flex-1 text-xl outline-none text-[#42006C] placeholder:text-gray-500"
//                   required
//                 />
//               </div>
//             </div>

//             {error && (
//             <p className="mt-4 text-red-500 text-center text-sm">{error}</p>
//           )}

//             {/* Login Button */}
//             <div className="flex justify-center mt-10">
//               <button className="w-32 h-12 bg-[#2A00B7] rounded-full text-white text-xl font-semibold shadow-md hover:bg-[#42006C] transition">
//                 Login
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default LogIN;
import React, { useContext, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { MdLock } from "react-icons/md";
import RegisterContext from "../Context/RegisterContext";
import { useNavigate } from "react-router";

const LogIN = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const { checkLogin } = useContext(RegisterContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const isValid = checkLogin(email, pass);

    if (isValid) {
      navigate("/home", { replace: true });
    } else {
      setError("Invalid Login Credentials.");
    }
  };

  return (
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
                placeholder="Enter E-mail"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent flex-1 text-base sm:text-lg outline-none text-[#42006C] placeholder:text-gray-500"
                required
              />
            </div>

            {/* Password */}
            <div className="flex items-center bg-gray-100 h-12 sm:h-14 rounded-lg px-3 gap-3">
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

          {/* Error message */}
          {error && (
            <p className="mt-4 text-red-500 text-center text-sm sm:text-base">
              {error}
            </p>
          )}

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
  );
};

export default LogIN;

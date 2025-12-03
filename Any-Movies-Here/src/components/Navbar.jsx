import React, { useContext } from "react";
import logo from "../assets/OnlyIcon.svg";
import { NavLink, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";
import RegisterContext from "../Context/RegisterContext";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { UserCircleIcon } from '@heroicons/react/24/solid'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'

const Navbar = () => {
  const { user, setUser } = useContext(RegisterContext);
  const navigate = useNavigate();
  // console.log("from navbar");
  // console.log(user);

  const handleLogOut = () => {
    localStorage.removeItem("registeredUser");

    if (setUser) setUser(null);

    navigate("/register", { replace: true });
  };

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-300/20 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main navbar flex */}
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* LEFT — Logo + Text (text hidden on mobile) */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-7 h-7 sm:w-8 sm:h-8" />

            {/* logo text hidden on small screens */}
            <div className="hidden sm:flex space-x-2 ml-2">
              <span className="font-bold text-[#E9327C] text-xl md:text-2xl">
                CINEMA
              </span>
              <span className="font-bold text-[#001A49] text-xl md:text-2xl">
                WORLD
              </span>
            </div>
          </div>

          {/* CENTER — NavLinks (always centered regardless of left side width) */}
          <div className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-6 text-base sm:text-lg md:text-xl font-semibold">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `border-0 outline-0 ${
                  isActive ? "text-[#E9327C]" : "text-slate-900"
                } hover:text-[#E9327C]`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                `border-0 outline-0 ${
                  isActive ? "text-[#E9327C]" : "text-slate-900"
                } hover:text-[#E9327C]`
              }
            >
              Favorite
            </NavLink>

            <NavLink
              to="/imdbtop250"
              className={({ isActive }) =>
                `border-0 outline-0 ${
                  isActive ? "text-[#E9327C]" : "text-slate-900"
                } hover:text-[#E9327C]`
              }
            >
              IMDB
              <span className="absolute -top-2.5 -right-2.5 text-[12px] items-center justify-center flex rounded-full w-5 h-5 bg-red-600 text-white">
                100
              </span>
            </NavLink>
          </div>
          <div className="flex items-center justify-end w-auto border-none outline-none">
            <Menu as="div" className="relative inline-block text-left border-none outline-none">
              <MenuButton
                className="inline-flex items-center gap-2 rounded-full 
             bg-white/80 px-3 py-1.5 
             text-sm font-medium text-slate-900 shadow-md 
             hover:bg-slate-50 transition-colors
             border-0 outline-none focus:outline-none focus:ring-0"
              >
                <FaUserCircle className="text-2xl sm:text-3xl text-slate-900 hover:text-[#E9327C] transition-colors" />
                {/* Username visible on md+ screens */}
                <span className="hidden md:inline">
                  {user?.uname || "Guest"}
                </span>
              </MenuButton>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right 
             divide-y divide-gray-100 rounded-xl bg-white shadow-lg 
             outline-none border-0
             transition data-closed:scale-95 data-closed:transform 
             data-closed:opacity-0 data-enter:duration-100 
             data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  {({ active }) => (
                    <button
                      
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        active
                          ? "bg-slate-100 text-slate-900"
                          : "bg-white text-slate-800"
                      }`}
                    >
                      Manage profile
                    </button>
                  )}
                </MenuItem>
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleLogOut}
                      className={`w-full text-left px-4 py-2 rounded-md ${
                        active
                          ? "bg-[#E9327C]/10 text-[#E9327C]"
                          : "bg-white text-red-600"
                      }`}
                    >
                      Log out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

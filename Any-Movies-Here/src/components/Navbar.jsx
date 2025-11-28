
import React from "react";
import logo from "../assets/OnlyIcon.svg";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-300/20 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main navbar flex */}
        <div className="flex items-center justify-between h-16 md:h-20 relative">

          {/* LEFT — Logo + Text (text hidden on mobile) */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-7 h-7 sm:w-8 sm:h-8"
            />

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
              to="/"
              className={({ isActive }) =>
                `${isActive ? "text-[#E9327C]" : "text-slate-900"} hover:text-[#E9327C]`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/favorite"
              className={({ isActive }) =>
                `${isActive ? "text-[#E9327C]" : "text-slate-900"} hover:text-[#E9327C]`
              }
            >
              Favorite
            </NavLink>

            <NavLink
              to="/imdbtop250"
              className={({ isActive }) =>
                `${isActive ? "text-[#E9327C]" : "text-slate-900"} hover:text-[#E9327C]`
              }
            >
              IMDB
              <span className="absolute -top-2.5 -right-2.5 text-[12px] items-center justify-center flex rounded-full w-5 h-5 bg-red-600 text-white">100</span>
            </NavLink>
          </div>

          {/* RIGHT — Empty placeholder to keep center alignment perfect */}
          <div className="w-10 sm:w-20"></div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;

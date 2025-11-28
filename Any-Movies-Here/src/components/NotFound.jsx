import React from "react";
import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div className="pt-16 md:pt-20 h-fit px-4 sm:px-6 lg:px-8 flex items-start justify-center">
      <div className="max-w-xl w-full text-center bg-white/80 rounded-3xl shadow-xl px-6 py-10 sm:px-10 sm:py-12 ">
        
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-4">
          404 • Page Not Found
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Oops! 🎬
        </h1>

        <p className="mt-3 text-base sm:text-lg text-slate-600">
          Looks like this scene doesn’t exist in{" "}
          <span className="font-semibold text-[#001A49]">CINEMA</span>
          <span className="font-semibold text-[#E9327C]">WORLD</span>.
        </p>

        <p className="mt-1 text-sm sm:text-base text-slate-500">
          The page you're trying to reach may have been removed or is temporarily unavailable.
        </p>


        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <NavLink
            to="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#001A49] text-white text-sm font-semibold hover:bg-[#021331] transition"
          >
            Go back Home
          </NavLink>

          <NavLink
            to="/favorite"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-sm font-semibold text-slate-800 border border-slate-300 hover:bg-slate-50 transition"
          >
            View Favorites ❤️
          </NavLink>
        </div>

        <p className="mt-4 text-xs sm:text-sm text-slate-500">
          Or try searching for a movie from the Home page.
        </p>
      </div>
    </div>
  );
};

export default NotFound;

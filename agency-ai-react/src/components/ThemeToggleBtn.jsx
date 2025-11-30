import React, { useEffect } from "react";
import { IoMoonSharp, IoSunny } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";


const ThemeToggleBtn = ({ theme, setTheme }) => {
    
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme : dark"
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button>
        {theme === "dark" ? (
          <IoSunny
            onClick={() => setTheme("light")}
            className="size-[34px] p-1.5 border border-gray-500 rounded-full fill-white"
          />
        ) : (
          <IoMoonOutline
            onClick={() => setTheme("dark")}
            className="size-[34px] p-1.5 border border-gray-500 rounded-full"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;

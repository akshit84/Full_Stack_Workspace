import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

// const SearchBar = ({ value, onChange, onReset }) => {
const SearchBar = ({ onReset, onSearchClick }) => {
// 
// const SearchBar = ({ onSearch, onReset }) => {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (onSearch) {
    //   onSearch(searchText);
    // }
    if (onSearchClick) {
      onSearchClick(searchText);
    }
  };

  const handleReset = () => {
    setSearchText("");
    if (onReset) {
      onReset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex justify-center">
      <div className="sm:flex sm:space-x-2">
        <div className="flex items-center border border-slate-400 h-9 space-x-2 px-2 rounded-xl w-64 sm:w-80">
          <GoSearch className="text-slate-400" />
          <input
            type="text"
            value={searchText}
            placeholder="Search Movie"
            onChange={(e) => setSearchText(e.target.value)}
            //  onChange={(e) => onChange(e.target.value)}
            className="text-slate-700 border-0 outline-none text-base w-full"
          />
        </div>
        <div className="flex justify-center space-x-1 mt-2 sm:mt-0 sm:space-x-2">
          <button
            type="submit"
            className="bg-[#001A49] text-white px-4 rounded-2xl h-9 w-full sm:w-auto"
          >
            Search
          </button>

          <button
            type="button"
            className="bg-red-500 text-white px-4 rounded-2xl h-9 w-full sm:w-fit"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
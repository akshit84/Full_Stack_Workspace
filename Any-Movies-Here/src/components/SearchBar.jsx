// import axios from "axios";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSearch) {
      console.log(searchText);

      onSearch(searchText);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex space-x-2">
          <div className="flex items-center border border-slate-400  h-8 space-x-2 px-1 rounded-xl">
            <div>
              <GoSearch className="text-slate-400" />
            </div>
            <input
              type="text"
              value={searchText}
              placeholder="Search Movie"
              onChange={(e) => setSearchText(e.target.value)}
              className="text-slate-400 border-0 outline-0 text-base w-2xl"
            />
          </div>

          <button
            type="submit"
            className="bg-[#001A49] text-white px-2 rounded-2xl w-52"
          >
            Search
          </button>
          <button
            type="submit"
            className="bg-[#001A49] text-white px-2 rounded-2xl w-52"
            onClick={() => setSearchText("")}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchBar;

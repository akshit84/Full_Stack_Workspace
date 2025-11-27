import { useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (searchText) => {
    // e?.preventDefault();
    if (!searchText.trim()) {
      setMovies([]);
      setError("Please enter a movie name");
      return;
    }
    setError(null);
    // console.log("Searc bar texttttt" + searchText);

    try {
      const res = await axios.get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`
      );
      // console.log(res);

      const data = res.data;
      //   console.log("Data isss" + data);

      if (data.Response === "True") {
        setMovies(data.Search || []);
        // console.log("Movies.....", movies);
      } else {
        setMovies([]);
        setError("No Movie Found.");
      }
    } catch (error) {
      console.log("NO movies found");
      setError(error);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-5 px-4 sm:px-6 lg:px-8 h-auto ">
        <div className="my-5">
          <SearchBar onSearch={handleSearch} />
        </div>
        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-slate-700">
              Search movies to see here 🍿
            </h2>
            <p className="text-lg font-semibold text-slate-700">
              Type a movie name in the search bar above and hit Search.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

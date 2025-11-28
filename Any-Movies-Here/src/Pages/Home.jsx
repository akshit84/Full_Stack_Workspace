
import { useState } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard";
import SearchBar from "../../components/SearchBar";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (searchText) => {
    if (!searchText.trim()) {
      setMovies([]);
      setError("Please enter a movie name");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchText}`
      );

      const data = res.data;

      if (data.Response === "True") {
        setMovies(data.Search || []);
      } else {
        setMovies([]);
        setError(data.Error || "No movie found.");
      }
    } catch (err) {
      console.log("Error fetching movies:", err);
      setMovies([]);
      setError("Something went wrong while fetching movies. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setMovies([]);
    setError(null);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-start mt-5 px-4 sm:px-6 lg:px-8 h-auto">
        <div className="my-5 w-full flex justify-center">
          <SearchBar onSearch={handleSearch} onReset={handleReset} />
        </div>

        <div className="mb-4 min-h-6">
          {loading && (
            <p className="text-slate-700 text-sm text-center">
              Searching movies...
            </p>
          )}
          {!loading && error && (
            <p className="text-red-600 text-sm text-center">{error}</p>
          )}
        </div>

        {movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          !loading &&
          !error && (
            <div className="flex flex-col items-center text-center mt-4">
              <h2 className="text-2xl font-bold text-slate-700">
                Search movies to see here 🍿
              </h2>
              <p className="text-lg font-semibold text-slate-700">
                Type a movie name in the search bar above and hit Search.
              </p>
            </div>
          )
        )}
      </div>
    </>
  );
};

export default Home;

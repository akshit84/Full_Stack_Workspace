import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import { IMDB_TOP_100_IDS } from "../utils/IMDBTop100";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const IMDB = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopMovies = async () => {
      setLoading(true);
      setError(null);

      try {
        const responses = await Promise.all(
          IMDB_TOP_100_IDS.map((id) =>
            axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
          )
        );

        const validMovies = responses
          .map((res) => res.data)
          .filter((m) => m && m.Response === "True");

        setMovies(validMovies);
      } catch (err) {
        console.error("Error fetching top movies:", err);
        setError("Failed to load IMDb top movies. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTopMovies();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 pb-10">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 text-center">
        IMDb Top 100 (Static List)
      </h2>

      {/* Loading / Error / Empty states */}
      {loading && (
        <p className="text-slate-700 text-center">Loading IMDb top 100...</p>
      )}

      {!loading && error && (
        <p className="text-red-600 text-center">{error}</p>
      )}

      {!loading && !error && movies.length === 0 && (
        <p className="text-slate-700 text-center">
          No movies to display right now.
        </p>
      )}

      {!loading && !error && movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default IMDB;

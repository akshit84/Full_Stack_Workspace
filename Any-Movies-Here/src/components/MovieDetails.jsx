import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

const MovieDetails = () => {
  const { imdbID } = useParams();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!imdbID) return;

    const fetchDetails = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}&plot=full`
        );

        const data = res.data;

        if (data.Response === "True") {
          setMovie(data);
        } else {
          setMovie(null);
          setError(data.Error || "No movie found.");
        }
      } catch (err) {
        console.error("Error fetching Data: ", err);
        setMovie(null);
        setError("Failed to load movie details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [imdbID]);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 min-h-screen">
        {/* Loading */}
        {loading && (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-slate-700 text-lg">Loading movie details...</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <p className="text-red-600 text-lg mb-4">{error}</p>
            <p className="text-slate-600">
              Try searching for another movie from the home page.
            </p>
          </div>
        )}

        {/* No movie (edge case) */}
        {!loading && !error && !movie && (
          <div className="flex items-center justify-center h-[60vh]">
            <p className="text-slate-700 text-lg">
              Movie details not available.
            </p>
          </div>
        )}
        {/* Main details */}
        {!loading && !error && movie && (
          <div className="bg-white/80 rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col md:flex-row gap-8">
            {/* Poster + chips */}
            <div className="md:w-1/3">
              <div className="w-full aspect-[2/3] overflow-hidden rounded-2xl shadow-lg bg-slate-200">
                <img
                  src={
                    movie.Poster && movie.Poster !== "N/A"
                      ? movie.Poster
                      : "https://via.placeholder.com/400x600?text=No+Poster"
                  }
                  alt={movie.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-2 text-xs">
                {movie.Year && movie.Year !== "N/A" && (
                  <span className="px-3 py-1 rounded-full bg-slate-900 text-white">
                    {movie.Year}
                  </span>
                )}
                {movie.Rated && movie.Rated !== "N/A" && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                    Rated {movie.Rated}
                  </span>
                )}
                {movie.Runtime && movie.Runtime !== "N/A" && (
                  <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300">
                    {movie.Runtime}
                  </span>
                )}
                {movie.Genre && movie.Genre !== "N/A" && (
                  <span className="px-3 py-1 rounded-full bg-pink-100 text-pink-700">
                    {movie.Genre}
                  </span>
                )}
              </div>
            </div>

            {/* Right side: title, ratings, plot, info */}
            <div className="md:w-2/3 flex flex-col gap-4">
              {/* Title + rating */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-950">
                  {movie.Title}
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {movie.Type ? movie.Type.toUpperCase() : "MOVIE"}
                  {movie.Released &&
                    movie.Released !== "N/A" &&
                    ` • Released ${movie.Released}`}
                </p>

                {movie.imdbRating && movie.imdbRating !== "N/A" && (
                  <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold">
                    <span>⭐ IMDb</span>
                    <span>{movie.imdbRating}/10</span>
                    {movie.imdbVotes && movie.imdbVotes !== "N/A" && (
                      <span className="text-xs text-yellow-700">
                        ({movie.imdbVotes} votes)
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Plot */}
              {movie.Plot && movie.Plot !== "N/A" && (
                <div className="mt-2">
                  <h2 className="text-lg font-semibold text-slate-900 mb-1">
                    Synopsis
                  </h2>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    {movie.Plot}
                  </p>
                </div>
              )}

              {/* Info grid */}
              <div className="mt-2 grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base">
                {[
                  { label: "Release Year", value: movie.Year },
                  { label: "Age Rating", value: movie.Rated },
                  { label: "Runtime", value: movie.Runtime },
                  { label: "Genre", value: movie.Genre },
                  { label: "Director", value: movie.Director },
                  { label: "Writers", value: movie.Writer },
                  { label: "Starring", value: movie.Actors },
                  { label: "Languages", value: movie.Language },
                  { label: "Country", value: movie.Country },
                  { label: "Box Office", value: movie.BoxOffice },
                  { label: "Awards", value: movie.Awards },
                  { label: "Production", value: movie.Production },
                ]
                  .filter((item) => item.value && item.value !== "N/A")
                  .map((item) => (
                    <div key={item.label} className="flex">
                      <span className="font-semibold text-slate-950 min-w-[120px]">
                        {item.label}:
                      </span>
                      <span className="ml-2 text-slate-900/90">
                        {item.value}
                      </span>
                    </div>
                  ))}
              </div>

              {/* Website */}
              {movie.Website && movie.Website !== "N/A" && (
                <div className="mt-4">
                  <a
                    href={movie.Website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900 text-white text-sm hover:bg-slate-800 transition"
                  >
                    Official Website
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MovieDetails;

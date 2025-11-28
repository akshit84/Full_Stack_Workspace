import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MdOutlineFavorite } from "react-icons/md";
import FavoriteContext from "../Context/FavoriteContext";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoriteContext);

   const favorite = isFavorite(movie.imdbID);
  // console.log("favorite for",movie.imdbID, "=", favorite);

  const handleClick = () => {
    navigate(`/moviedetails/${movie.imdbID}`);
  };

  const handleFavorite = (e) => {
    e.stopPropagation();
    // console.log("Favorite clicked for:", movie.imdbID, "current:", favorite);
    if (favorite) {
      removeFavorite(movie.imdbID);
    } else {
      addFavorite(movie);
    }
  };

  const fallbackPoster = "https://via.placeholder.com/600x400?text=No+Poster";

  const poster =
    movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : fallbackPoster;

  return (
    <>
        <div
          onClick={handleClick}
          className="max-w-sm bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
        > 
          <div className="relative h-56 sm:h-60 md:h-64 w-full overflow-hidden">
            <img
              src={poster}
              alt={movie.Title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
            <button
              onClick={handleFavorite}
              className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition 
                      hover:scale-110 ${
                        favorite ? "text-red-500" : "text-slate-700"
                      }`} //${favorite ? "text-red-500" : "text-slate-700" }
            >
              <MdOutlineFavorite
                className={`w-4 h-4 ${
                  favorite ? "fill-red-500" : "fill-slate-600"
                }`}
              />
            </button>
            <div className="absolute top-3 left-3 flex gap-2 text-[10px] uppercase font-semibold tracking-wide">
              <span className="px-2 py-1 rounded-full bg-black/70 text-white">
                {movie.Type || "Movie"}
              </span>

              {movie.Year && (
                <span className="px-2 py-1 rounded-full bg-white/90 text-gray-900">
                  {movie.Year}
                </span>
              )}
            </div>
          </div>
          <div className="px-4 pt-3 w-auto h-10 mb-5">
            <h3 className="font-semibold text-slate-900 text-sm sm:text-base line-clamp-2">
              {movie.Title}
            </h3>
          </div>
        </div>
    </>
  );
};

export default MovieCard;

// import React from "react";
// import { useNavigate } from "react-router";

// const MovieCard = ({ movie }) => {

//     const navigate = useNavigate()

//     const handleClick = () => {
//         navigate(`moviedetails/${movie.imdbID}`);
//     }
//     const fallbackPoster = "http://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1etnTu8WGIp7THzZXFwWXvI_9DWKwt00bVD7tJbDr-PKP-f1b4rx3TGQ_v37BP6cXXdM&usqp=CAU"

//     const poster = movie?.Poster !== "N/A" ? movie.Poster : fallbackPoster;

//   return (
//     <>
//       <div onClick={handleClick} className="max-w-sm bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden cursor-pointer
//                  hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all">
//         <div className="relative h-52 w-full overflow-hidden">
//           <img src={poster} alt={movie.Title} className="w-full h-full object-cover" />
//         </div>
//         <div className="px-4 pt-3 pb-1">
//         <p className=" font-semibold text-slate-900 text-lg">
//           {movie.Title} ({movie.Year})
//         </p>
//       </div>
//       </div>
//     </>
//   );
// };

// export default MovieCard;

import React, { useState } from "react";
import { useNavigate } from "react-router";
import { FiClock, FiEye } from "react-icons/fi";
import { MdOutlineFavorite } from "react-icons/md";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    navigate(`/moviedetails/${movie.imdbID}`);
  };

  const handleFavorite = (e) => {
    e.stopPropagation(); // Prevent opening movie details on click
    setFavorite(!favorite);
  };

  const fallbackPoster = "https://via.placeholder.com/600x400?text=No+Poster";

  const poster =
    movie?.Poster && movie.Poster !== "N/A" ? movie.Poster : fallbackPoster;

  return (
    <div
      onClick={handleClick}
      className="max-w-sm bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.12)]
                 overflow-hidden cursor-pointer transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.2)]"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={poster}
          alt={movie.Title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
        <button
          onClick={handleFavorite}
          className={`absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md transition 
                      hover:scale-110 `}
        >
          <MdOutlineFavorite
            className={`w-4 h-4 ${favorite ? "fill-red-500" : ""}`}
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
  );
};

export default MovieCard;

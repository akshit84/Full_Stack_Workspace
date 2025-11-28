import React, { useContext } from "react";
import MovieCard from "../../components/MovieCard";
import FavoriteContext from "../../Context/FavoriteContext";

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 h-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-center">
        Your Favorite Movies ❤️
      </h2>

      {favorites.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <p className="text-xl font-semibold text-slate-700">
            You haven't added anything yet.
          </p>
          <p className="text-slate-500 mt-2">
            Tap the heart on any movie card to save it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorite;

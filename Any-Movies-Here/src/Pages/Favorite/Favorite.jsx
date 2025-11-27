import React, { useContext } from "react";
import { FavoriteContext } from "../../Context/FavoriteContext";
import MovieCard from "../../components/MovieCard";

const Favorite = () => {
  const { favorites } = useContext(FavoriteContext);
  console.log("favorite lengthhhhhhhhhhhhhhh", favorites.length);
  console.log(favorites);

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center mt-5 px-4 sm:px-6 lg:px-8 h-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {favorites.length === 0 ? (
            <p>You have not add anithing</p>
          ) : (
            favorites.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Favorite;

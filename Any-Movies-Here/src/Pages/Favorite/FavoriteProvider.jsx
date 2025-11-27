import { useEffect, useState } from "react";
import { FavoriteContext } from "../../Context/FavoriteContext";

export const FavoriteProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    setFavorites((prevFavorites) => {
      const alreadyExists = prevFavorites.some(
        (fav) => fav.imdbID === movie.imdbID
      );

      if (alreadyExists) {
        // console.log("Already favorite:", movie.imdbID);
        return prevFavorites; 
      }

      const update = [...prevFavorites,movie];
    //   console.log("Added favorite:");

      return update;
    });
  };

  const removeFavorite = (movieID) => {
    setFavorites((prevFavorites) => {
      const updated = prevFavorites.filter((fav) => fav.imdbID !== movieID);
    //   console.log("Removed favorite:", movieID, "->", updated);
      return updated;
    });
  };

  const isFavorite = (imdbID) => {
    const result = favorites.some((movie) => movie.imdbID === imdbID);
    // console.log("isFavorite?",imdbID, "=>",result);
    
    return result
  };

  const contextValue = { favorites, addFavorite, removeFavorite, isFavorite };
  return (
    <>
      <FavoriteContext.Provider value={contextValue}>
        {children}
      </FavoriteContext.Provider>
    </>
  );
};

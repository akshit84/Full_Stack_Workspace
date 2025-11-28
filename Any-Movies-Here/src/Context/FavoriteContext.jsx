// src/Context/FavoriteContext.jsx (or .js)

import { createContext, useEffect, useState } from "react";

// 1️⃣ Create the context
 const FavoriteContext = createContext();

// 2️⃣ Create the provider component
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
        return prevFavorites;
      }

      const updated = [...prevFavorites, movie];
      return updated;
    });
  };

  const removeFavorite = (movieID) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.imdbID !== movieID)
    );
  };

  const isFavorite = (imdbID) => {
    return favorites.some((movie) => movie.imdbID === imdbID);
  };

  const contextValue = { favorites, addFavorite, removeFavorite, isFavorite };

  return (
    <FavoriteContext.Provider value={contextValue}>
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteContext
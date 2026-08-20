import { useEffect, useState } from "react";

const FALLBACK_POSTER = "/icons.svg";

function useFavouriteMovies() {
  const [favourites, setFavourites] = useState(() => {
    const storedValue = localStorage.getItem("favourites");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  function addFavourite(movie) {
    setFavourites((favourites) => {
      const alreadyFavourite = favourites.some(
        (item) => item.id === movie.imdbID,
      );

      if (alreadyFavourite) return favourites;

      const favouriteMovie = {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        genre: movie.Genre,
        runtime: movie.Runtime,
        rating: movie.imdbRating,
        poster:
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : FALLBACK_POSTER,
        description: movie.Plot,
      };

      return [...favourites, favouriteMovie];
    });
  }

  function removeFavourite(id) {
    setFavourites((favourites) =>
      favourites.filter((movie) => movie.id !== id),
    );
  }

  function isFavourite(id) {
    return favourites.some((movie) => movie.id === id);
  }

  return { favourites, addFavourite, removeFavourite, isFavourite };
}

export default useFavouriteMovies;

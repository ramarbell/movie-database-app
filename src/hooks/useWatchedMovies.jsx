import { useEffect, useState } from "react";

function useWatchedMovies() {
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  function addWatched(movie, userRating) {
    setWatched((watched) => {
      const alreadyWatched = watched.some((item) => item.id === movie.imdbID);
      const watchedMovie = {
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        genre: movie.Genre,
        runtime: movie.Runtime,
        rating: movie.imdbRating,
        poster: movie.Poster,
        description: movie.Plot,
        userRating: userRating,
      };

      if (alreadyWatched) return watched;

      return [...watched, watchedMovie];
    });
  }

  function removeWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.id !== id));
  }

  function isWatched(id) {
    return watched.some((movie) => movie.id === id);
  }

  return { watched, addWatched, removeWatched, isWatched };
}

export default useWatchedMovies;

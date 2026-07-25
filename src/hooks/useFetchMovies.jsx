import { useState, useEffect } from "react";
import staticMovies from "../data/movies";

const KEY = "5eb573aa";
const MIN_SEARCH_LENGTH = 3;

function useFetchMovies(search) {
  const [movies, setMovies] = useState(staticMovies);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const query = search.trim();
  const shouldFetch = query.length >= MIN_SEARCH_LENGTH;

  useEffect(() => {
    const controller = new AbortController();

    if (!shouldFetch) {
      return () => {};
    }

    async function fetchMovies() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${encodeURIComponent(query)}`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch movies");
        }

        const data = await response.json();

        if (data.Response === "False") {
          setMovies([]);
          setError(data.Error);
          return;
        }

        const movies = Array.isArray(data.Search)
          ? data.Search.map((movie) => ({
              id: movie.imdbID,
              title: movie.Title,
              year: movie.Year,
              genre: movie.Type,
              runtime: movie.Runtime,
              rating: "N/A",
              poster: movie.Poster !== "N/A" ? movie.Poster : "/icons.svg",
              description: "Search result from OMDb.",
            }))
          : [];

        setMovies(movies);
      } catch (error) {
        if (error.name !== "AbortError") {
          setMovies([]);
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [query, shouldFetch]);

  return {
    movies: shouldFetch ? movies : staticMovies,
    loading: shouldFetch ? loading : false,
    error: shouldFetch ? error : null,
  };
}

export default useFetchMovies;

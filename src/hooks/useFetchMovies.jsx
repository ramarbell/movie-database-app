import { useState, useEffect } from "react";

const KEY = "5eb573aa";
const MIN_SEARCH_LENGTH = 3;
const SEARCH_CACHE_KEY = "movie-search-results";

function getSearchCache() {
  const cachedValue = sessionStorage.getItem(SEARCH_CACHE_KEY);
  return cachedValue ? JSON.parse(cachedValue) : {};
}

function getCachedMovies(query) {
  return getSearchCache()[query] || [];
}

function cacheMovies(query, movies) {
  const cache = getSearchCache();
  cache[query] = movies;
  sessionStorage.setItem(SEARCH_CACHE_KEY, JSON.stringify(cache));
}

function useFetchMovies(search) {
  const query = search.trim();
  const shouldFetch = query.length >= MIN_SEARCH_LENGTH;
  const [movies, setMovies] = useState(() => getCachedMovies(query));
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    if (!shouldFetch) {
      return () => {};
    }

    async function fetchMovies() {
      const cachedMovies = getCachedMovies(query);

      if (cachedMovies.length > 0) {
        setMovies(cachedMovies);
      }

      setLoading(cachedMovies.length === 0);
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

        cacheMovies(query, movies);
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
    movies: shouldFetch ? movies : [],
    loading: shouldFetch ? loading : false,
    error: shouldFetch ? error : null,
  };
}

export default useFetchMovies;

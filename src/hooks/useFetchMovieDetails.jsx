import { useEffect, useState } from "react";

const KEY = import.meta.env.VITE_OMDB_API_KEY;

function useFetchMovieDetails(movieId) {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&i=${movieId}&plot=full`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error("Could not fetch movie details");
        }

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "Movie not found");
        }
        setMovie(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }
    getMovieDetails();
    return () => controller.abort();
  }, [movieId]);

  return { movie, loading, error };
}

export default useFetchMovieDetails;

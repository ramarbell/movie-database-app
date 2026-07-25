import { useEffect, useState } from "react";

const KEY = "5eb573aa";

function useFetchMovieDetails(movieId) {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMovieDetails() {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${movieId}&plot=full`,
      );
      const data = await response.json();
      setMovie(data);
      setError(data.error);
      setLoading(false);
    }
    getMovieDetails();
  }, [movieId]);

  return { movie, loading, error };
}

export default useFetchMovieDetails;

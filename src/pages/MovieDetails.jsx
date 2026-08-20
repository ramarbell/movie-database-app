import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../hooks/useFetchMovieDetails";
import StarRating from "../components/StarRating";
import useWatchedMovies from "../hooks/useWatchedMovies";
import useFavouriteMovies from "../hooks/useFavouriteMovies";
import MoviePoster from "../components/MoviePoster";

function MovieDetails() {
  const [userRating, setUserRating] = useState("");
  const { movieId } = useParams();
  const { movie, loading, error } = useFetchMovieDetails(movieId);
  const { addWatched, isWatched } = useWatchedMovies();
  const { addFavourite, isFavourite } = useFavouriteMovies();

  if (loading) {
    return <p>Loading movie details...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!movie) {
    return <p>Movie not found.</p>;
  }

  const { Title, Year, Runtime, Genre, Actors, Poster, Plot } = movie;
  const alreadyRated = isWatched(movieId);
  const alreadyFavourite = isFavourite(movieId);
  const hasUserRating = userRating > 0;

  return (
    <>
      <div className="movie-details-page">
        <div className="details">
          <MoviePoster
            className="details-poster"
            src={Poster}
            alt={`${Title} poster`}
          />
          <section className="details-content">
            <h1>{Title}</h1>
            <div className="details-meta">
              <span>{Year}</span>
              <span>{Runtime}</span>
              <span>{Genre}</span>
            </div>
            <div className="details-section">
              <h2>Starring</h2>
              <p>{Actors}</p>
            </div>
            <div className="details-section">
              <h2>Plot</h2>
              <p>{Plot}</p>
            </div>
            <button
              className="btn-add"
              disabled={alreadyFavourite}
              onClick={() => addFavourite(movie)}
            >
              {alreadyFavourite ? "Added to favourites" : "Add to favourites"}
            </button>
          </section>
        </div>
      </div>

      <section>
        {alreadyRated ? (
          <p className="already-rated">You have already rated this movie</p>
        ) : (
          <div className="rating">
            <StarRating onSetMovieRating={setUserRating} />

            <button
              className="btn-add"
              disabled={!hasUserRating}
              onClick={() => addWatched(movie, userRating)}
            >
              Add to watched
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default MovieDetails;

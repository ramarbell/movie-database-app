import MovieCard from "./MovieCard";

function WatchedList({ watched, onRemoveWatched }) {
  return (
    <div className="movie-grid">
      {watched.map((movie) => (
        <>
          <div>
            <MovieCard movie={movie} key={movie.id}>
              <button
                className="btn-delete"
                onClick={() => onRemoveWatched(movie.id)}
              >
                X
              </button>
              <p>
                Your rating {movie.userRating} <span>⭐️</span>
              </p>
            </MovieCard>
          </div>
        </>
      ))}
    </div>
  );
}

export default WatchedList;

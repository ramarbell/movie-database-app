import MovieCard from "./MovieCard";

function FavouritesList({ favourites, onRemoveFavourite }) {
  return (
    <div className="movie-grid">
      {favourites.map((movie) => (
        <MovieCard movie={movie} key={movie.id}>
          <button
            className="btn-delete"
            onClick={() => onRemoveFavourite(movie.id)}
          >
            X
          </button>
        </MovieCard>
      ))}
    </div>
  );
}

export default FavouritesList;

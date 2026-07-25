import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div>
      <article className="movie-card">
        <img src={movie.poster} alt={`${movie.title} poster`} />
        <div className="movie-card-content">
          <div className="movie-card-title">
            <h3>{movie.title}</h3>
            <span>{movie.rating}</span>
          </div>
          <p className="movie-meta">
            {movie.year} | {movie.genre} | {movie.runtime}
          </p>
          <p>{movie.description}</p>
          <Link to={`/movie/${movie.id}`}>View details</Link>
        </div>
      </article>
    </div>
  );
}

export default MovieCard;

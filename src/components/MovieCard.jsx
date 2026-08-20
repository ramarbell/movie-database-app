import { Link } from "react-router-dom";
import MoviePoster from "./MoviePoster";

function MovieCard({ movie, children }) {
  return (
    <div>
      <article className="movie-card">
        <MoviePoster src={movie.poster} alt={`${movie.title} poster`} />
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
          {children && <div className="movie-card-actions">{children}</div>}
        </div>
      </article>
    </div>
  );
}

export default MovieCard;

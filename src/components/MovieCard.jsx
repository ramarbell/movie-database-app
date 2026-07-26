import { Link } from "react-router-dom";

function MovieCard({ movie, children }) {
  return (
    <div>
      <article className="movie-card">
        <img
          src={movie.poster}
          alt={`${movie.title} poster`}
          onError={(event) => {
            event.currentTarget.src = "/icons.svg";
          }}
        />
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
        {children}
      </article>
    </div>
  );
}

export default MovieCard;

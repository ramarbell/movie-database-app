import MovieCard from "./MovieCard";

function Box({ movies, loading, error }) {
  if (loading) {
    return (
      <div className="box">
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="box">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="box">
      <div className="box-header">
        <h2>Featured Movies</h2>
        <p>{movies.length} movies found</p>
      </div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default Box;

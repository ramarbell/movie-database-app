import MovieCard from "./MovieCard";

function Box({ movies, loading, error, search }) {
  const hasSearch = search.trim().length > 0;

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

  if (!hasSearch) {
    return (
      <div className="box">
        <div className="empty-state">
          <h2>Search for a movie to get started</h2>
          <p>
            Type at least 3 characters above and your results will appear here.
          </p>
        </div>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="box">
        <div className="empty-state">
          <h2>No movies found</h2>
          <p>Try a different title or check the spelling.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="box">
      <div className="box-header">
        <h2>Search Results</h2>
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

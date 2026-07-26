import WatchedList from "../components/WatchedList";
import useWatchedMovies from "../hooks/useWatchedMovies";

function Watched() {
  const { watched, removeWatched } = useWatchedMovies();
  return (
    <div className="main">
      Watched
      <WatchedList watched={watched} onRemoveWatched={removeWatched} />
    </div>
  );
}

export default Watched;

import WatchedList from "../components/WatchedList";
import BackButton from "../components/BackButton";
import useWatchedMovies from "../hooks/useWatchedMovies";

function Watched() {
  const { watched, removeWatched } = useWatchedMovies();
  return (
    <div className="main">
      <div className="page-heading">
        <BackButton />
        <h1>Watched</h1>
      </div>
      <WatchedList watched={watched} onRemoveWatched={removeWatched} />
    </div>
  );
}

export default Watched;

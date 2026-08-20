import FavouritesList from "../components/FavouritesList";
import BackButton from "../components/BackButton";
import useFavouriteMovies from "../hooks/useFavouriteMovies";

function Favourites() {
  const { favourites, removeFavourite } = useFavouriteMovies();

  return (
    <div className="main">
      <div className="page-heading">
        <BackButton />
        <h1>Favourites</h1>
      </div>
      <FavouritesList
        favourites={favourites}
        onRemoveFavourite={removeFavourite}
      />
    </div>
  );
}

export default Favourites;

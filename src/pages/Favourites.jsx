import FavouritesList from "../components/FavouritesList";
import useFavouriteMovies from "../hooks/useFavouriteMovies";

function Favourites() {
  const { favourites, removeFavourite } = useFavouriteMovies();

  return (
    <div className="main">
      Favourites
      <FavouritesList
        favourites={favourites}
        onRemoveFavourite={removeFavourite}
      />
    </div>
  );
}

export default Favourites;

import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h1>Movie Database</h1>

      <NavLink to="/">Home</NavLink>

      <NavLink to="/favourites">Favourites</NavLink>
    </nav>
  );
}

export default NavBar;

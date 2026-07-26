import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Favourites from "./pages/Favourites";
import MovieDetails from "./pages/MovieDetails";
import Watched from "./pages/Watched";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/watched" element={<Watched />} />
      </Routes>
    </>
  );
}

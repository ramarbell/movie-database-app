import { useState } from "react";

import Header from "../components/Header";
import MainBody from "../components/MainBody";
import NavBar from "../components/NavBar";
import Box from "../components/Box";
import useFetchMovies from "../hooks/useFetchMovies";

function HomePage() {
  const [search, setSearch] = useState("");
  const { movies, loading, error } = useFetchMovies(search);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} />
      <MainBody>
        <NavBar />
        <Box
          movies={filteredMovies}
          loading={loading}
          error={error}
          search={search}
        />
      </MainBody>
    </div>
  );
}

export default HomePage;

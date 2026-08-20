import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import MainBody from "../components/MainBody";
import NavBar from "../components/NavBar";
import Box from "../components/Box";
import useFetchMovies from "../hooks/useFetchMovies";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(() => searchParams.get("q") || "");
  const { movies, loading, error } = useFetchMovies(search);
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase()),
  );

  function handleSearchChange(value) {
    setSearch(value);

    const query = value.trim();

    if (query) {
      setSearchParams({ q: query }, { replace: true });
      return;
    }

    setSearchParams({}, { replace: true });
  }

  return (
    <div className="app">
      <Header search={search} setSearch={handleSearchChange} />
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

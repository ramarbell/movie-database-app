function Header({ search, setSearch }) {
  return (
    <>
      <div className="header">
        <h1>Movie Database</h1>
        <span>🍿</span>
        <p>Your ultimate movie companion</p>
        <p>Discover, rate, and explore your favorite movies</p>
        <div className="search">
          <input
            type="text"
            placeholder="Search for a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍 Search</button>
        </div>
      </div>
    </>
  );
}

export default Header;

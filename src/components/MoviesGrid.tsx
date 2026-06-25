// import { useState } from "react";
import "../App.css";
import "../styles.css";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";


export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63);
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  // )

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="SearchMovies..."
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="movies-grid">
          {movies.map((movie) => (
            <>
              <MovieCard movie={movie} key={movie.id} />
            </>
          ))}
        </div>
      </div>
    </>
  );
}

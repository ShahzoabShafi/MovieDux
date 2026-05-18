// import { useState } from "react";
import "../App.css";
import "../styles.css";
import { useState, useEffect } from "react";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63);
    fetch("movies.json")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }, []);

  return (
    <>
      <div className="movies-grid">
        {movies.map((movie) => (
          <>
            <div className="movie-card" key={movie.id}>
              <img src={`./${movie.image}`} alt={movie.title} />
              <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p className="movie-card-genre">{movie.genre}</p>
                <p className="movie-card-rating">{movie.rating}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

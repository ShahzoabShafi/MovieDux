import "../App.css";
import "../styles.css";

export default function MovieCard({ movie }) {
  const handleError = (e) => {
    e.target.src = "./default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating >= 6) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <>
      <div className="movie-card" key={movie.id}>
        <img src={`./${movie.image}`} alt={movie.title} onError={handleError} />
        <div className="movie-card-info">
          <h3 className="movie-card-title">{movie.title}</h3>
          <p className="movie-card-genre">{movie.genre}</p>
          <p className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </p>
        </div>
      </div>
    </>
  );
}

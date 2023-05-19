import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ name, time, src }) {
  let location = useLocation();
  return (
    <div className="movie-card">
      <div className="movie-card__options">
        <div className="movie-card__info">
          <span className="movie-card__text">{name}</span>
          <span className="movie-card__time">{time}</span>
        </div>
        {location.pathname === "/movies" ? (
          <div className="movie-card__like"></div>
        ) : (
          <div className="movie-card__delete"></div>
        )}
      </div>
      <img src={src} className="movie-card__image" alt="Постер фильма" />
    </div>
  );
}

export default MoviesCard;

import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ name, duration, src }) {
  let location = useLocation();

  const handleClickButton = (e) => {
    e.stopPropagation();
    console.log("button clicked");
  };

  return (
    <div className="movie-card">
      <div className="movie-card__options">
        <div className="movie-card__info">
          <span className="movie-card__text">{name}</span>
          <span className="movie-card__duration">{duration}</span>
        </div>
        {location.pathname === "/movies" ? (
          <button
            onClick={handleClickButton}
            className="movie-card__button movie-card__button_like"
          ></button>
        ) : (
          <button
            onClick={handleClickButton}
            className="movie-card__button movie-card__button_delete"
          ></button>
        )}
      </div>
      <img src={src} className="movie-card__image" alt="Постер фильма" />
    </div>
  );
}

export default MoviesCard;

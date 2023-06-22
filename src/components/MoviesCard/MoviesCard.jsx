import { useContext } from "react";
import "./MoviesCard.css";
import { useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({
  name,
  duration,
  src,
  handleCreateMovie,
  handleCardDelete,
  movie,
  savedMovies,
}) {
  const CurrentUser = useContext(CurrentUserContext);
  let location = useLocation();
  const isLiked = savedMovies.some((m) => {
    return m.owner === CurrentUser._id && m.movieId === movie.id;
  });

  function handleLikeClick(e) {
    e.stopPropagation();
    handleCreateMovie(movie);
  }

  function handleDeleteClick(e) {
    e.stopPropagation();
    handleCardDelete(movie, location.pathname === "/saved-movies");
  }

  return (
    <div className="movie-card">
      <div className="movie-card__options">
        <div className="movie-card__info">
          <span className="movie-card__text">{name}</span>
          <span className="movie-card__duration">{duration}</span>
        </div>
        {location.pathname === "/movies" ? (
          <button
            onClick={isLiked ? handleDeleteClick : handleLikeClick}
            className={
              isLiked
                ? "movie-card__button movie-card__button_like"
                : "movie-card__button movie-card__button_unlike"
            }
          ></button>
        ) : (
          <button
            onClick={handleDeleteClick}
            className="movie-card__button movie-card__button_delete"
          ></button>
        )}
      </div>
      <img src={src} className="movie-card__image" alt="Постер фильма" />
    </div>
  );
}

export default MoviesCard;

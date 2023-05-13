import "./MoviesCard.css";
import { useLocation } from "react-router-dom";

function MoviesCard({ name, time, src }) {
  let location = useLocation();
  return (
    <div className="movie__card">
      <div className="movie__card_options">
        <div className="movie__card_info">
          <span className="movie__card_text">{name}</span>
          <span className="movie__card_time">{time}</span>
        </div>
        {location.pathname === "/movies" ? (
          <div className="movie__card_like"></div>
        ) : (
          <div className="movie__card_delete"></div>
        )}
      </div>
      <img src={src} className="movie__card_image" alt="" />
    </div>
  );
}

export default MoviesCard;

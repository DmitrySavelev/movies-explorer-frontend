import "./MoviesCard.css";

function MoviesCard({ name, time, src }) {
  return (
    <div className="movie__card">
      <div>
        <img src={src} className="movie__card_image" alt="" />
      </div>
      <div className="movie__card_info">
        <span>{name}</span>
        <div className="movie__card_like"></div>
      </div>
      <span className="movie__card_time">{time}</span>
    </div>
  );
}

export default MoviesCard;

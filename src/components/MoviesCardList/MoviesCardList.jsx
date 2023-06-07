import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect } from "react";

function MoviesCardList({
  searchedMovies,
  isButtonClicked,
  isEmptyPage,
  setIsEmptyPage,
}) {
  const getTimeFromMins = (mins) => {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return minutes === 0
      ? hours + "ч "
      : hours === 0
      ? minutes + "м"
      : hours + "ч " + minutes + "м";
  };

  const showTrailer = (trailerLink) => {
    window.open(trailerLink, "_blank");
  };

  const moviesList = (cards) => {
    return cards.map((movie) => (
      <li
        key={movie.id}
        onClick={() => {
          showTrailer(movie.trailerLink);
        }}
      >
        <MoviesCard
          name={movie.nameRU}
          duration={getTimeFromMins(movie.duration)}
          src={`https://api.nomoreparties.co${movie.image.url}`}
        />
      </li>
    ));
  };

  useEffect(() => {
    if (isButtonClicked && isEmptyPage) {
      setIsEmptyPage(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonClicked]);

  return (
    <div className="moviesCardList">
      {isEmptyPage ? (
        <div className="moviesCardList__wrapper"></div>
      ) : (
        <>
          {searchedMovies.length > 0 ? (
            <ul className="movies__list">{moviesList(searchedMovies)}</ul>
          ) : (
            <div className="moviesCardList__wrapper">
              <span>Ничего не найдено</span>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default MoviesCardList;

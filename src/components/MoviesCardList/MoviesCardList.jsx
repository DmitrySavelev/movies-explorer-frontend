import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function MoviesCardList({
  searchedMovies,
  isButtonClicked,
  isEmptyPage,
  setIsEmptyPage,
  handleCreateMovie,
  savedMovies,
  handleCardDelete,
  countCardsInitialLoad,
  pushMore,
  setIsShowedButton,
}) {
  let location = useLocation();

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

  const readyArrToRender = searchedMovies.slice(
    0,
    countCardsInitialLoad + pushMore
  );

  useEffect(() => {
    if (
      readyArrToRender.length === searchedMovies.length &&
      readyArrToRender.length !== 0
    ) {
      setIsShowedButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readyArrToRender.length, searchedMovies, isButtonClicked]);

  const moviesList = (array) => {
    return array.map((movie) => (
      <li
        key={location.pathname === "/movies" ? movie.id : movie._id}
        onClick={() => {
          showTrailer(movie.trailerLink);
        }}
      >
        <MoviesCard
          movie={movie}
          savedMovies={savedMovies}
          name={movie.nameRU}
          duration={getTimeFromMins(movie.duration)}
          src={
            location.pathname === "/movies"
              ? `https://api.nomoreparties.co${movie.image.url}`
              : movie.image
          }
          handleCreateMovie={handleCreateMovie}
          handleCardDelete={handleCardDelete}
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
            <ul className="movies__list">
              {location.pathname === "/movies"
                ? moviesList(readyArrToRender)
                : moviesList(searchedMovies)}
            </ul>
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

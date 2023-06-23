import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BASE_MOVIES_API_URL, getTimeFromMins } from "../../utils/config";

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
  readyArrToRender,
  setReadyArrToRender,
}) {
  const [moviesToRender, setMoviesToRender] = useState([]);
  let location = useLocation();

  const showTrailer = (trailerLink) => {
    window.open(trailerLink, "_blank");
  };

  useEffect(() => {
    if (searchedMovies.length > 0) {
      setReadyArrToRender(
        searchedMovies.slice(0, countCardsInitialLoad + pushMore)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovies]);

  useEffect(() => {
    if (isEmptyPage && isButtonClicked) {
      setIsEmptyPage(false);
    }
    if (
      readyArrToRender.length === searchedMovies.length &&
      readyArrToRender.length !== 0
    ) {
      setIsShowedButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovies, isButtonClicked, readyArrToRender]);

  const moviesList = (array) => {
    return array.map((movie, index) => (
      <li
        key={location.pathname === "/movies" ? index : movie._id}
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
              ? `${BASE_MOVIES_API_URL}${movie.image.url}`
              : movie.image
          }
          handleCreateMovie={handleCreateMovie}
          handleCardDelete={handleCardDelete}
        />
      </li>
    ));
  };

  useEffect(() => {
    if (location.pathname === "/saved-movies") {
      if (
        searchedMovies.length === 0 &&
        localStorage.getItem("nameSave").length === 0
      ) {
        setMoviesToRender(savedMovies);
      } else if (searchedMovies.length === 0) {
        setMoviesToRender([]);
      } else if (searchedMovies.length > 0) {
        setMoviesToRender(searchedMovies);
      }
    }
  }, [location.pathname, savedMovies, searchedMovies]);

  return (
    <div className="moviesCardList">
      {isEmptyPage ? (
        <div className="moviesCardList__wrapper"></div>
      ) : (
        <>
          {location.pathname === "/movies" && searchedMovies.length > 0 ? (
            <ul className="movies__list">{moviesList(readyArrToRender)}</ul>
          ) : moviesToRender.length > 0 ? (
            <ul className="movies__list">{moviesList(moviesToRender)}</ul>
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

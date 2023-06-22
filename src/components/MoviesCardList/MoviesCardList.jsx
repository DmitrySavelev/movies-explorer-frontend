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
}) {
  let location = useLocation();

  const showTrailer = (trailerLink) => {
    window.open(trailerLink, "_blank");
  };

  const [readyArrToRender, setReadyArrToRender] = useState([]);

  useEffect(() => {
    const storedArr = JSON.parse(localStorage.getItem("readyArrLocalStorage"));
    if (storedArr && storedArr.length > 0) {
      setReadyArrToRender(storedArr);
    } else {
      setReadyArrToRender([]);
    }
  }, []);

  useEffect(() => {
    if (searchedMovies.length > 0) {
      setReadyArrToRender(
        searchedMovies.slice(0, countCardsInitialLoad + pushMore)
      );
      localStorage.setItem(
        "readyArrLocalStorage",
        JSON.stringify(readyArrToRender)
      );
    } else {
      setReadyArrToRender([]);
      localStorage.setItem("readyArrLocalStorage", JSON.stringify([]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchedMovies]);

  useEffect(() => {
    // if (
    //   isEmptyPage &&
    //   (isButtonClicked || (isEmptyPage && readyArrToRender.length > 0))
    // ) {
    //   setIsEmptyPage(false);
    // }

    if (isButtonClicked && isEmptyPage) {
      setIsEmptyPage(false);
    }

    if (isEmptyPage && readyArrToRender.length > 0) {
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
    // console.log("array >>>", array);
    // console.log(readyArrToRender);
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
              ? `${BASE_MOVIES_API_URL}${movie.image.url}`
              : movie.image
          }
          handleCreateMovie={handleCreateMovie}
          handleCardDelete={handleCardDelete}
        />
      </li>
    ));
  };

  return (
    <div className="moviesCardList">
      {isEmptyPage ? (
        <div className="moviesCardList__wrapper">EmptyPage</div>
      ) : (
        <>
          {searchedMovies.length > 0 && readyArrToRender.length > 0 ? ( // Добавлено условие readyArrToRender.length > 0
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

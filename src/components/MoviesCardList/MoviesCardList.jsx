import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cards, searchedMovies, isLoading }) {
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

  return (
    <div>
      {searchedMovies ? (
        searchedMovies.length > 0 ? (
          <div className="moviesCardList">
            <ul className="movies__list">{moviesList(searchedMovies)}</ul>
          </div>
        ) : (
          <span>Ничего не найдено</span>
        )
      ) : (
        <></>
      )}
    </div>
    // <div>
    //   {searchedMovies.length >= 1 ? (
    //     <div className="moviesCardList">
    //       <ul className="movies__list">{moviesList(searchedMovies)}</ul>
    //     </div>
    //   ) : (
    //     <span>Ничего не найдено</span>
    //   )}
    // </div>
  );
}

export default MoviesCardList;

import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
// import More from "../More/More";

function Movies({
  cards,
  searchedMovies,
  setSearchedMovies,
  isLoading,
  setIsButtonClicked,
  isButtonClicked,
  isEmptyPage,
  setIsEmptyPage,
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          searchedMovies={searchedMovies}
          isButtonClicked={isButtonClicked}
          isEmptyPage={isEmptyPage}
          setIsEmptyPage={setIsEmptyPage}
        />
      )}
      {/* <More /> */}
    </section>
  );
}

export default Movies;

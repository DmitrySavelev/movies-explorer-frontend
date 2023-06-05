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
  isButtonClicked,
  setIsButtonClicked,
  // searchHandler,
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        setSearchedMovies={setSearchedMovies}
        searchedMovies={searchedMovies}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        // searchHandler={searchHandler}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={cards}
          searchedMovies={searchedMovies}
          isLoading={isLoading}
        />
      )}
      {/* <More /> */}
    </section>
  );
}

export default Movies;

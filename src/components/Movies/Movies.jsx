import "./Movies.css";

import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies({
  cards,
  savedMovies,
  searchedMovies,
  setSearchedMovies,
  isLoading,
  setIsButtonClicked,
  isButtonClicked,
  isEmptyPage,
  setIsEmptyPage,
  handleCreateMovie,
  handleCardDelete,
  countCardsInitialLoad,
  countCardsAddMore,
  pushMore,
  setPushMore,
  isShowedButton,
  setIsShowedButton,
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        searchedMovies={searchedMovies}
        setSearchedMovies={setSearchedMovies}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        pushMore={pushMore}
        setPushMore={setPushMore}
        isShowedButton={isShowedButton}
        setIsShowedButton={setIsShowedButton}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          cards={cards}
          savedMovies={savedMovies}
          searchedMovies={searchedMovies}
          isButtonClicked={isButtonClicked}
          isEmptyPage={isEmptyPage}
          setIsEmptyPage={setIsEmptyPage}
          handleCreateMovie={handleCreateMovie}
          handleCardDelete={handleCardDelete}
          countCardsInitialLoad={countCardsInitialLoad}
          countCardsAddMore={countCardsAddMore}
          pushMore={pushMore}
          setPushMore={setPushMore}
          setIsShowedButton={setIsShowedButton}
        />
      )}
      {isShowedButton && (
        <More
          countCardsAddMore={countCardsAddMore}
          pushMore={pushMore}
          setPushMore={setPushMore}
        />
      )}
    </section>
  );
}

export default Movies;

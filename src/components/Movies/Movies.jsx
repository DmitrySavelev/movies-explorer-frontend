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
  responseMessage,
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
        setIsShowedButton={setIsShowedButton}
        responseMessage={responseMessage}
      />
      {isLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          savedMovies={savedMovies}
          searchedMovies={searchedMovies}
          isButtonClicked={isButtonClicked}
          isEmptyPage={isEmptyPage}
          setIsEmptyPage={setIsEmptyPage}
          handleCreateMovie={handleCreateMovie}
          handleCardDelete={handleCardDelete}
          countCardsInitialLoad={countCardsInitialLoad}
          pushMore={pushMore}
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

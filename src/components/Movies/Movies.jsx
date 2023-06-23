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
  readyArrToRender,
  setReadyArrToRender,
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        setSearchedMovies={setSearchedMovies}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        pushMore={pushMore}
        setPushMore={setPushMore}
        setIsShowedButton={setIsShowedButton}
        responseMessage={responseMessage}
        setReadyArrToRender={setReadyArrToRender}
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
          readyArrToRender={readyArrToRender}
          setReadyArrToRender={setReadyArrToRender}
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

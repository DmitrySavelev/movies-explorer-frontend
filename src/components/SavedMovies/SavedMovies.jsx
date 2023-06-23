import SearchForm from "../SearchForm/SearchForm";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies({
  cards,
  searchedMovies,
  setSearchedMovies,
  isLoading,
  setIsButtonClicked,
  isButtonClicked,
  isEmptyPage,
  setIsEmptyPage,
  savedMovies,
  handleCreateMovie,
  handleCardDelete,
  countCardsInitialLoad,
  countCardsAddMore,
  pushMore,
  setPushMore,
  setIsShowedButton,
  responseMessage,
  readyArrToRender,
  setReadyArrToRender,
  setSavedMovies,
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        setSearchedMovies={setSearchedMovies}
        isButtonClicked={isButtonClicked}
        setIsButtonClicked={setIsButtonClicked}
        savedMovies={savedMovies}
        pushMore={pushMore}
        setPushMore={setPushMore}
        setIsShowedButton={setIsShowedButton}
        responseMessage={responseMessage}
        readyArrToRender={readyArrToRender}
        setReadyArrToRender={setReadyArrToRender}
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
          readyArrToRender={readyArrToRender}
          setReadyArrToRender={setReadyArrToRender}
          setSavedMovies={setSavedMovies}
        />
      )}
      <div className="empty-div"></div>
    </section>
  );
}

export default SavedMovies;

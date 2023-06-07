import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
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
}) {
  return (
    <section className="movies">
      <SearchForm
        cards={cards}
        setSearchedMovies={setSearchedMovies}
        setIsButtonClicked={setIsButtonClicked}
      />
      {/* <Preloader /> */}
      <MoviesCardList
        searchedMovies={searchedMovies}
        isButtonClicked={isButtonClicked}
        isEmptyPage={isEmptyPage}
        setIsEmptyPage={setIsEmptyPage}
      />
      <div className="empty-div"></div>
    </section>
  );
}

export default SavedMovies;

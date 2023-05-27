import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="movies">
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <div className="empty-div"></div>
    </section>
  );
}

export default SavedMovies;

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./SavedMovies.css";

function SavedMovies({ handleClick }) {
  return (
    <div className="movies">
      <Header handleClick={handleClick} />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <div className="empty-div"></div>
      <Footer />
    </div>
  );
}

export default SavedMovies;

import "./Movies.css";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
// import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import More from "../More/More";

function Movies({ handleClick }) {
  return (
    <div className="movies">
      <Header handleClick={handleClick} />
      <SearchForm />
      {/* <Preloader /> */}
      <MoviesCardList />
      <More />
      <Footer />
    </div>
  );
}

export default Movies;

import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
// import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
// import NotFound from "../NotFound/NotFound";
import Popup from "../Popup/Popup";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { api } from "../../utils/MoviesApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function App() {
  let location = useLocation();
  const [cards, setCards] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setIsButtonClicked(true);
  //   const filteredArr = cards.filter((movie) => {
  //     return (
  //       (movie.nameRU.toLowerCase().includes(inputValue) ||
  //         movie.nameEN.toLowerCase().includes(inputValue)) &&
  //       handleDuration(movie)
  //     );
  //   });
  //   console.log("cards", cards);
  //   console.log("filteredArr", filteredArr);
  //   // console.log("searchedMovies before", searchedMovies);
  //   setSearchedMovies(filteredArr);
  //   // console.log("searchedMovies after", searchedMovies);
  // };

  useEffect(() => {
    if (isButtonClicked) {
      setIsLoading(true);
      api
        .getInitialCards()
        .then((data) => {
          setCards(data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [isButtonClicked]);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  // setTimeout(() => {
  //   console.log(isLoading);
  // }, 3000);

  function handleClick() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {location.pathname === "/" ? (
          <Navigation />
        ) : location.pathname === "/movies" ||
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile" ? (
          <Header handleClick={handleClick} />
        ) : (
          ""
        )}
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <Movies
                  cards={cards}
                  setSearchedMovies={setSearchedMovies}
                  searchedMovies={searchedMovies}
                  isLoading={isLoading}
                  setIsButtonClicked={setIsButtonClicked}
                  isButtonClicked={isButtonClicked}
                  // searchHandler={searchHandler}
                />
              }
            />
            {/* <Route path="/saved-movies" element={<SavedMovies />} /> */}
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route
              path="/profile"
              element={<Profile handleClick={handleClick} />}
            />
          </Routes>
        </main>
        <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
        {location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/" ? (
          <Footer />
        ) : (
          ""
        )}
        {/* <NotFound/> */}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

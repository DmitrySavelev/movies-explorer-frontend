import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
// import NotFound from "../NotFound/NotFound";
import Popup from "../Popup/Popup";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { api } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { register, authorize, checkToken } from "../../utils/Auth";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isEmptyPage, setIsEmptyPage] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserData()
        .then((data) => {
          setCurrentUser(data);
        })
        .catch((error) => console.log(error));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (isButtonClicked && cards.length === 0) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonClicked]);

  function handleClickOpenPopup() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setLoggedIn(true);
          setUserData({
            email: res.email,
            password: res.password,
          });
        })
        .catch((error) => console.error(error));
    }
  }, []);

  function handleRegister({ name, email, password }) {
    return register(name, email, password).then((res) => {
      if (res) {
        navigate("/movies", { replace: true });
      }
    });
  }

  function handleLogin({ email, password }) {
    return authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          setUserData({
            email: email,
            password: password,
          });
          navigate("/movies");
        }
      })
      .catch(() => {
        // setIsOpenInfoTooltip(true);
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("token");
  }

  function handleUpdateUser(userData) {
    console.log(userData);
    mainApi
      .editProfile(userData)
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch((error) => console.log(error));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {location.pathname === "/" ? (
          <Navigation />
        ) : location.pathname === "/movies" ||
          location.pathname === "/saved-movies" ||
          location.pathname === "/profile" ? (
          <Header onOpen={handleClickOpenPopup} />
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
                  isEmptyPage={isEmptyPage}
                  setIsEmptyPage={setIsEmptyPage}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <SavedMovies
                  cards={cards}
                  setSearchedMovies={setSearchedMovies}
                  searchedMovies={searchedMovies}
                  isLoading={isLoading}
                  setIsButtonClicked={setIsButtonClicked}
                  isButtonClicked={isButtonClicked}
                  isEmptyPage={isEmptyPage}
                  setIsEmptyPage={setIsEmptyPage}
                />
              }
            />
            <Route
              path="/signin"
              element={<Login handleLogin={handleLogin} />}
            />
            <Route
              path="/signup"
              element={<Register handleRegister={handleRegister} />}
            />
            <Route
              path="/profile"
              element={
                <Profile
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                />
              }
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

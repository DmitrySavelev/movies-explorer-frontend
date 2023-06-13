import "./App.css";
import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import NotFound from "../NotFound/NotFound";
import Popup from "../Popup/Popup";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { register, authorize, checkToken } from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute";
import { messages } from "../../utils/config";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [cards, setCards] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isEmptyPage, setIsEmptyPage] = useState(true);
  const [countCardsAddMore, setCountCardsAddMore] = useState();
  const [countCardsInitialLoad, setCountCardsInitialLoad] = useState();
  const [pushMore, setPushMore] = useState(0);
  const [isShowedButton, setIsShowedButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

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
      moviesApi
        .getInitialCards()
        .then((data) => {
          mainApi.getSavedMovies().then((movies) => {
            setSavedMovies(movies);
            setCards(data);
          });
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isButtonClicked, savedMovies]);

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
        })
        .catch((error) => console.error(error));
    }
    window.addEventListener("resize", onResize);
    adaptCountCards();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  function handleRegister({ name, email, password }) {
    return register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
        setResponseMessage({});
      })
      .catch((err) => {
        console.log(err.status);
        if (err.status === 409) {
          setResponseMessage({ error: messages.emailError });
        } else {
          setResponseMessage({ error: messages.registerError });
        }
      });
  }

  function handleLogin({ email, password }) {
    return authorize(email, password)
      .then((res) => {
        if (res.token) {
          setLoggedIn(true);
          setResponseMessage({});
          navigate("/movies");
        }
      })
      .catch((err) => {
        if (err.status === 401) {
          setResponseMessage({ error: messages.loginError });
        } else {
          setResponseMessage({ error: messages.registerError });
        }
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
  }

  function handleUpdateUser(userData) {
    mainApi
      .editProfile(userData)
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        setResponseMessage({ message: messages.successMessage });
      })
      .catch((err) => {
        if (err.status === 409) {
          setResponseMessage({ error: messages.emailError });
        } else {
          setResponseMessage({ error: messages.editUserInfoError });
        }
      });
  }

  function handleCreateMovie(movie) {
    mainApi
      .addMovie(movie)
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((error) => console.log(error));
  }

  function findId(movie, deleteCard) {
    let foundMovie;
    if (deleteCard) {
      foundMovie = savedMovies.find((m) => {
        return m.movieId === movie.movieId;
      });
    } else {
      foundMovie = savedMovies.find((m) => {
        return m.movieId === movie.id;
      });
    }
    if (foundMovie) {
      return foundMovie._id;
    }
    return null;
  }

  function handleCardDelete(movie, deleteCard) {
    mainApi
      .deleteMovie(findId(movie, deleteCard))
      .then(() => {
        if (deleteCard) {
          setSavedMovies((state) =>
            state.filter((c) => {
              return c.movieId !== movie.movieId;
            })
          );
        } else {
          setSavedMovies((state) =>
            state.filter((c) => {
              return c.movieId !== movie.id;
            })
          );
        }
      })
      .catch(() => setResponseMessage({ error: messages.cardDeleteError }));
  }

  function adaptCountCards() {
    if (window.innerWidth > 1279) {
      setCountCardsAddMore(3);
      setCountCardsInitialLoad(12);
    } else if (window.innerWidth > 767) {
      setCountCardsAddMore(2);
      setCountCardsInitialLoad(8);
    } else {
      setCountCardsAddMore(2);
      setCountCardsInitialLoad(5);
    }
  }

  let timeOutHandler;

  function onResize() {
    clearTimeout(timeOutHandler);
    timeOutHandler = setTimeout(adaptCountCards, 1000);
  }

  function reset() {
    setResponseMessage({});
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
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Movies}
                  cards={cards}
                  savedMovies={savedMovies}
                  setSearchedMovies={setSearchedMovies}
                  searchedMovies={searchedMovies}
                  isLoading={isLoading}
                  setIsButtonClicked={setIsButtonClicked}
                  isButtonClicked={isButtonClicked}
                  isEmptyPage={isEmptyPage}
                  setIsEmptyPage={setIsEmptyPage}
                  handleCreateMovie={handleCreateMovie}
                  handleCardDelete={handleCardDelete}
                  countCardsInitialLoad={countCardsInitialLoad}
                  countCardsAddMore={countCardsAddMore}
                  pushMore={pushMore}
                  setPushMore={setPushMore}
                  isShowedButton={isShowedButton}
                  setIsShowedButton={setIsShowedButton}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={SavedMovies}
                  cards={cards}
                  setSearchedMovies={setSearchedMovies}
                  savedMovies={savedMovies}
                  searchedMovies={searchedMovies}
                  isLoading={isLoading}
                  setIsButtonClicked={setIsButtonClicked}
                  isButtonClicked={isButtonClicked}
                  isEmptyPage={isEmptyPage}
                  setIsEmptyPage={setIsEmptyPage}
                  handleCardDelete={handleCardDelete}
                  countCardsInitialLoad={countCardsInitialLoad}
                  countCardsAddMore={countCardsAddMore}
                  pushMore={pushMore}
                  setPushMore={setPushMore}
                  setIsShowedButton={setIsShowedButton}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  reset={reset}
                  onSignIn={handleLogin}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  reset={reset}
                  onSignUp={handleRegister}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute
                  loggedIn={loggedIn}
                  element={Profile}
                  onUpdateUser={handleUpdateUser}
                  onSignOut={handleSignOut}
                  reset={reset}
                  responseMessage={responseMessage}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Popup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          setSearchedMovies={setSearchedMovies}
        />
        {location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ||
        location.pathname === "/" ? (
          <Footer />
        ) : (
          ""
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

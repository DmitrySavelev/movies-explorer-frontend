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
import UnauthorizedComponent from "../UnauthorizedComponent/UnauthorizedComponent";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { moviesApi } from "../../utils/MoviesApi";
import { mainApi } from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { register, authorize, checkToken } from "../../utils/Auth";
import ProtectedRoute from "../ProtectedRoute";
import {
  MESSAGES,
  DEVICE_WIDTH,
  MOVIE_COUNT,
  MOVIE_COUNT_MORE,
} from "../../utils/config";

function App() {
  let location = useLocation();
  const navigate = useNavigate();

  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("FilmsFromMoviesApi")) || []
  );
  const [savedMovies, setSavedMovies] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: "",
    email: "",
    _id: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isEmptyPage, setIsEmptyPage] = useState(false);
  const [countCardsAddMore, setCountCardsAddMore] = useState(2);
  const [countCardsInitialLoad, setCountCardsInitialLoad] = useState(0);
  const [pushMore, setPushMore] = useState(0);
  const [isShowedButton, setIsShowedButton] = useState(false);
  const [responseMessage, setResponseMessage] = useState({});
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("loggedIn") === "true"
  );
  const [readyArrToRender, setReadyArrToRender] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("loggedIn", loggedIn);
  //   if (loggedIn && cards.length === 0) {
  //     setIsEmptyPage(true);
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [loggedIn]);

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
    if (loggedIn && cards.length === 0) {
      setIsEmptyPage(true);
    }
    if (loggedIn) {
      mainApi
        .getUserData()
        .then((data) => {
          setCurrentUser({
            name: data.data.name,
            email: data.data.email,
            _id: data.data._id,
          });
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies().then((movies) => {
        setSavedMovies(movies);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isButtonClicked && cards.length === 0) {
      setIsLoading(true);
      moviesApi
        .getInitialCards()
        .then((data) => {
          localStorage.setItem("FilmsFromMoviesApi", JSON.stringify(data));
          setCards(data);
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
    }
    if (isButtonClicked) {
      mainApi.getSavedMovies().then((movies) => {
        setSavedMovies(movies);
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
        })
        .catch((error) => console.error(error));
    }
    window.addEventListener("resize", onResize);
    adaptCountCards();
    return () => {
      window.removeEventListener("resize", onResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleRegister({ name, email, password }) {
    return register(name, email, password)
      .then((res) => {
        handleLogin({ email, password });
        setResponseMessage({});
      })
      .catch((err) => {
        if (err.status === 409) {
          setResponseMessage({ error: MESSAGES.EMAIL_ERROR });
        } else {
          setResponseMessage({ error: MESSAGES.REGISTER_ERROR });
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
          setResponseMessage({ error: MESSAGES.LOGIN_ERROR });
        } else {
          setResponseMessage({ error: MESSAGES.REGISTER_ERROR });
        }
      });
  }

  function handleSignOut() {
    setLoggedIn(false);
    setIsShowedButton(false);
    setCards([]);
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("isShortChecked");
    localStorage.removeItem("name");
    localStorage.removeItem("FilmsFromMoviesApi");
    localStorage.removeItem("nameSave");
  }

  function handleUpdateUser(userData) {
    mainApi
      .editProfile(userData)
      .then((data) => {
        setCurrentUser({ name: data.name, email: data.email });
        setResponseMessage({ message: MESSAGES.SUCCESS_MESSAGE });
      })
      .catch((err) => {
        if (err.status === 409) {
          setResponseMessage({ error: MESSAGES.EMAIL_ERROR });
        } else {
          setResponseMessage({ error: MESSAGES.EDIT_USER_INFO_ERROR });
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
      .catch(() => setResponseMessage({ error: MESSAGES.CARD_DELETE_ERROR }));
  }

  function adaptCountCards() {
    if (window.innerWidth > DEVICE_WIDTH.DESKTOP) {
      setCountCardsAddMore(MOVIE_COUNT_MORE.DESKTOP);
      setCountCardsInitialLoad(MOVIE_COUNT.DESKTOP);
    } else if (window.innerWidth > DEVICE_WIDTH.TABLET) {
      setCountCardsAddMore(MOVIE_COUNT_MORE.TABLET);
      setCountCardsInitialLoad(MOVIE_COUNT.TABLET);
    } else {
      setCountCardsAddMore(MOVIE_COUNT_MORE.MOBILE);
      setCountCardsInitialLoad(MOVIE_COUNT.MOBILE);
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
        {!loggedIn && location.pathname === "/" ? (
          <Navigation />
        ) : loggedIn &&
          (location.pathname !== "/signin" ||
            (loggedIn && location.pathname !== "/signup")) ? (
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
                loggedIn && (
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
                    readyArrToRender={readyArrToRender}
                    setReadyArrToRender={setReadyArrToRender}
                  />
                )
              }
            />
            <Route
              path="/saved-movies"
              element={
                loggedIn && (
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
                    readyArrToRender={readyArrToRender}
                    setReadyArrToRender={setReadyArrToRender}
                    setSavedMovies={setSavedMovies}
                  />
                )
              }
            />

            <Route
              path="/signin"
              element={
                <UnauthorizedComponent
                  loggedIn={loggedIn}
                  component={
                    <Login
                      reset={reset}
                      onSignIn={handleLogin}
                      responseMessage={responseMessage}
                    />
                  }
                  pathToRedirect="/movies"
                />
              }
            />

            <Route
              path="/signup"
              element={
                <UnauthorizedComponent
                  loggedIn={loggedIn}
                  component={
                    <Register
                      reset={reset}
                      onSignUp={handleRegister}
                      responseMessage={responseMessage}
                    />
                  }
                  pathToRedirect="/movies"
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

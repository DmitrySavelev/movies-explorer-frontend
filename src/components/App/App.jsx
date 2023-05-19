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
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import Footer from "../Footer/Footer";

function App() {
  let location = useLocation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="app">
      {location.pathname === "/" ? (
        <Navigation />
      ) : location.pathname === "/movies" ||
        location.pathname === "/saved-movies" ? (
        <Header handleClick={handleClick} />
      ) : (
        ""
      )}
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/saved-movies" element={<SavedMovies />} />
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
  );
}

export default App;

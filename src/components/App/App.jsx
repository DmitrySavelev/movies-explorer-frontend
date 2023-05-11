import "./App.css";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
// import NotFound from "../NotFound/NotFound";
import Popup from "../Popup/Popup";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handleClick() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies handleClick={handleClick} />} />
        <Route
          path="/saved-movies"
          element={<SavedMovies handleClick={handleClick} />}
        />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/profile"
          element={<Profile handleClick={handleClick} />}
        />
      </Routes>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      {/* <NotFound/> */}
    </div>
  );
}

export default App;

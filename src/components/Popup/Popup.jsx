import { Link, useLocation } from "react-router-dom";
import "./Popup.css";

const Popup = ({ isOpen, onClose, setSearchedMovies }) => {
  let location = useLocation();

  function handleClickClose() {
    onClose();
    setSearchedMovies([]);
  }
  return (
    <>
      <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
        <button
          type="button"
          aria-label="закрыть попап"
          className="popup__button-close"
          onClick={onClose}
        ></button>
        <div className="popup__wrapper">
          <Link
            to="/"
            onClick={handleClickClose}
            className={`popup__span ${
              location.pathname === "/" ? "popup__span_active" : ""
            }`}
          >
            Главная
          </Link>
          <Link
            to="/movies"
            onClick={handleClickClose}
            className={`popup__span ${
              location.pathname === "/movies" ? "popup__span_active" : ""
            }`}
          >
            Фильмы
          </Link>
          <Link
            to="/saved-movies"
            onClick={handleClickClose}
            className={`popup__span ${
              location.pathname === "/saved-movies" ? "popup__span_active" : ""
            }`}
          >
            Сохранённые фильмы
          </Link>
        </div>
        <Link
          to="/profile"
          className="popup__account"
          onClick={handleClickClose}
        >
          Аккаунт
        </Link>
      </section>
      {isOpen && <div className="popup__overlay"></div>}
    </>
  );
};

export default Popup;

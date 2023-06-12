import { Link } from "react-router-dom";
import "./Popup.css";

const Popup = ({ isOpen, onClose, setSearchedMovies }) => {
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
          <Link to="/" className="popup__span" onClick={handleClickClose}>
            Главная
          </Link>
          <Link to="/movies" className="popup__span" onClick={handleClickClose}>
            Фильмы
          </Link>
          <Link to="/saved-movies" className="popup__span" onClick={handleClickClose}>
            Сохранённые фильмы
          </Link>
        </div>
        <Link to="/profile" className="popup__account" onClick={handleClickClose}>
          Аккаунт
        </Link>
      </section>
      {isOpen && <div className="popup__overlay"></div>}
    </>
  );
};

export default Popup;

import { Link } from "react-router-dom";
import "./Popup.css";

const Popup = ({ isOpen, onClose }) => {
  return (
    <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <button
        type="button"
        aria-label="закрыть попап"
        className="popup__button-close"
        onClick={onClose}
      ></button>
      <div className="popup__wrapper">
        <Link to="/" className="popup__span" onClick={onClose}>
          Главная
        </Link>
        <Link to="/movies" className="popup__span" onClick={onClose}>
          Фильмы
        </Link>
        <Link to="/saved-movies" className="popup__span" onClick={onClose}>
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="popup__account">
        Аккаунт
      </Link>
    </section>
  );
};

export default Popup;

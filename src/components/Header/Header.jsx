import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";
import { useLocation } from "react-router-dom";

function Header({ onOpen }) {
  let location = useLocation();

  return (
    <header className="header">
      <div className="header__buttons-left">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <Link
          to="/movies"
          className={`header__button ${
            location.pathname === "/movies" ? "header__button_active" : ""
          }`}
        >
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className={`header__button ${
            location.pathname === "/saved-movies" ? "header__button_active" : ""
          }`}
        >
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="header__button header__button_account">
        Аккаунт
      </Link>
      <button className="burger" onClick={onOpen}></button>
    </header>
  );
}

export default Header;

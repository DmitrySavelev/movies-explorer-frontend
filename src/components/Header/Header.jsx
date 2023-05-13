import { Link } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo/Logo";

function Header({ handleClick }) {
  return (
    <div className="header">
      <div className="header__buttons_left">
        <Link to="/" className="header__logo">
          <Logo />
        </Link>
        <Link to="/movies" className="header__button header__button_film">
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="header__button header__button_saved-film"
        >
          Сохранённые фильмы
        </Link>
      </div>
      <Link to="/profile" className="header__button header__button_account">
        Аккаунт
      </Link>
      <div className="burger" onClick={handleClick}></div>
    </div>
  );
}

export default Header;

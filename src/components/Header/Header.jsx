import { Link } from "react-router-dom";
import "./Header.css";

function Header({ handleClick }) {
  return (
    <div className="header">
      <Link to="/" className="header__logo"></Link>
      <div className="burger" onClick={handleClick}></div>
      <div className="header__buttons">
        <Link to="/movies" className="header__button header__button_film">
          Фильмы
        </Link>
        <Link
          to="/saved-movies"
          className="header__button header__button_saved-film"
        >
          Сохранённые фильмы
        </Link>
        <Link to="/profile" className="header__button header__button_profile">
          <img src="images/profile.png" alt="Аккаунт" />
        </Link>
      </div>
    </div>
  );
}

export default Header;

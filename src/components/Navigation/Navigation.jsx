import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <a href="#aboutProject">
        <div className="navigation__logo"></div>
      </a>
      <div className="navigation__buttons">
        <Link to="/signup" className="navigation__sigh-up">
          Регистрация
        </Link>
        <Link to="/signin">
          <button className="navigation__sigh-in">Войти</button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

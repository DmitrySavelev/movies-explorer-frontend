import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../Logo/Logo";

function Navigation() {
  return (
    <div className="navigation">
      <a href="#aboutProject">
        <Logo />
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

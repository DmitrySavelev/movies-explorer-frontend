import { Link } from "react-router-dom";
import "./Navigation.css";
import Logo from "../Logo/Logo";

function Navigation() {
  return (
    <header className="navigation">
      <a href="#aboutProject">
        <Logo />
      </a>
      <div className="navigation__buttons">
        <Link to="/signup" className="navigation__sigh-up">
          Регистрация
        </Link>
        <Link to="/signin" className="navigation__sigh-in">
          Войти
        </Link>
      </div>
    </header>
  );
}

export default Navigation;

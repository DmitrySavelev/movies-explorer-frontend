import Logo from "../Logo/Logo";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/" className="login__logo">
          <Logo />
        </Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form action="" className="login__form">
          <span className="login__span">E-mail</span>
          <input
            className="login__input"
            type="text"
            required
            placeholder="Введите почту"
          />
          <span className="login__span">Пароль</span>
          <input
            className="login__input"
            type="password"
            required
            placeholder="Введите пароль"
          />
          <button type="submit" className="login__button">
            Войти
          </button>
          <span className="login__subtitle">
            <span>Ещё не зарегистрированы?</span>
            <Link to="/signup" className="login__link">
              Регистрация
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Login;
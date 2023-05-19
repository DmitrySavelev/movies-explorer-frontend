import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";

function Register() {
  return (
    <section className="register">
      <div className="register__wrapper">
        <Link to="/" className="register__logo">
          <Logo />
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>
        <form action="" className="register__form">
          <span className="register__span">Имя</span>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Введите имя"
          />
          <span className="register__span">E-mail</span>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Введите почту"
          />
          <span className="register__span">Пароль</span>
          <input
            className="register__input"
            type="password"
            required
            placeholder="Введите пароль"
          />
          <button type="submit" className="register__button">
            Зарегистрироваться
          </button>
          <span className="register__subtitle">
            <span>Уже зарегистрированы?</span>
            <Link to="/signin" className="register__link">
              Войти
            </Link>
          </span>
        </form>
      </div>
    </section>
  );
}

export default Register;
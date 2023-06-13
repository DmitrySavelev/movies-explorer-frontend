import { useEffect } from "react";
import Logo from "../Logo/Logo";
import "./Login.css";
import { Link } from "react-router-dom";
import { useValidationForm } from "../../utils/useValidationForm";

function Login({ reset, onSignIn, responseMessage }) {
  const { values, errors, isValid, handleChange } = useValidationForm();

  useEffect(() => {
    reset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e) {
    e.preventDefault();
    reset();
    onSignIn(values);
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/" className="login__logo">
          <Logo />
        </Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form
          action=""
          className="login__form"
          onSubmit={handleSubmit}
          noValidate
        >
          <span className="login__span">E-mail</span>
          <input
            className="login__input"
            type="text"
            required
            minLength="2"
            maxLength="30"
            id="email"
            placeholder="Введите почту"
            onChange={handleChange}
            name="email"
            value={values.email || ""}
          />
          <span className="login__form_error">{errors.email || ""}</span>
          <span className="login__span">Пароль</span>
          <input
            className="login__input"
            type="password"
            required
            minLength="4"
            maxLength="16"
            id="password"
            placeholder="Введите пароль"
            onChange={handleChange}
            name="password"
            value={values.password || ""}
          />
          <span className="login__form_error">{errors.password || ""}</span>
          <span
            className={`login__form_response-error ${
              responseMessage.message && "login__form_response-message"
            }`}
          >
            {responseMessage.error}
          </span>
          <button
            type="submit"
            className={`login__button ${
              !isValid ? "login__button_disabled" : ""
            }`}
            disabled={!isValid}
          >
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

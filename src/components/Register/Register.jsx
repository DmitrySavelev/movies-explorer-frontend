import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import { useEffect } from "react";
import { useValidationForm } from "../../utils/useValidationForm";

function Register({ reset, onSignUp, responseMessage }) {
  const { values, errors, isValid, handleChange } = useValidationForm();

  useEffect(() => {
    reset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  function handleSubmit(e) {
    e.preventDefault();
    reset();
    onSignUp(values);
  }

  return (
    <section className="register">
      <div className="register__wrapper">
        <Link to="/" className="register__logo">
          <Logo />
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>
        <form action="" className="register__form" onSubmit={handleSubmit} noValidate>
          <span className="register__span">Имя</span>
          <input
            className="register__input"
            type="text"
            required
            minLength="2"
            maxLength="30"
            id="name"
            value={values.name || ""}
            placeholder="Введите имя"
            onChange={handleChange}
            name="name"
          />
          <span className="register__form_error">{errors.name || ""}</span>
          <span className="register__span">E-mail</span>
          <input
            className="register__input"
            type="text"
            required
            minLength="2"
            maxLength="30"
            id="email"
            value={values.email || ""}
            placeholder="Введите почту"
            onChange={handleChange}
            name="email"
          />
          <span className="register__form_error">{errors.email || ""}</span>
          <span className="register__span">Пароль</span>
          <input
            className="register__input"
            type="password"
            required
            minLength="4"
            maxLength="16"
            id="password"
            value={values.password || ""}
            placeholder="Введите пароль"
            onChange={handleChange}
            name="password"
          />
          <span className="register__form_error">{errors.password || ""}</span>
          <span
            className={`register__form_response-error ${
              responseMessage.message && "register__form_response-message"
            }`}
          >
            {responseMessage.error}
          </span>
          <button
            type="submit"
            className={`register__button ${
              !isValid ? "register__button_disabled" : ""
            }`}
            disabled={!isValid}
          >
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

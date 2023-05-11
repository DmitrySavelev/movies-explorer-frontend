import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <div className="register__wrapper">
        <Link to="/">
          <div className="register__logo"></div>
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>
        <form action="" className="register__form">
          <span className="register__span">Имя</span>
          <input
            className="register__input"
            type="text"
            placeholder="Введите имя"
          />
          <span className="register__span">E-mail</span>
          <input
            className="register__input"
            type="text"
            placeholder="Введите почту"
          />
          <span className="register__span">Пароль</span>
          <input
            className="register__input"
            type="password"
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
    </div>
  );
}

export default Register;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="auth">
  <form onSubmit={handleSubmit} name="authForm" className={`auth__form`}>
    <h2 className="auth__title">{title}</h2>
    <label className="popup__form-field">
      <input
        name="email"
        value={userData.email || ""}
        onChange={handleChange}
        type="email"
        id="email-input"
        className="auth__input auth__input_email"
        placeholder="Email"
        minLength="2"
        maxLength="40"
      />
      <span className="popup__error name-input-error"></span>
    </label>
    <label className="popup__form-field">
      <input
        name="password"
        value={userData.password || ""}
        onChange={handleChange}
        type="password"
        id="password-input"
        className="auth__input auth__input_password"
        placeholder="Пароль"
        minLength="2"
        maxLength="200"
      />
      <span className="popup__error job-input-error"></span>
    </label>
    <button type="submit" className="auth__button" onSubmit={handleSubmit}>
      {submitValue}
    </button>
    <span className="auth__subtitle">
      Уже зарегистрированы?{" "}
      <Link to="/signin" className="auth__link">
        Войти
      </Link>
    </span>
  </form>
</div>; */
}

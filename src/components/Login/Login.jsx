import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="login__wrapper">
        <Link to="/">
          <div className="login__logo"></div>
        </Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form action="" className="login__form">
          <span className="login__span">E-mail</span>
          <input
            className="login__input"
            type="text"
            placeholder="Введите почту"
          />
          <span className="login__span">Пароль</span>
          <input
            className="login__input"
            type="password"
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
    </div>
  );
}

export default Login;

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

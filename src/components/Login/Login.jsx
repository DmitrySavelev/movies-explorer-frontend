import { useState } from "react";
import Logo from "../Logo/Logo";
import "./Login.css";
import { Link } from "react-router-dom";

function Login({ handleLogin }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(userData)
      .then(() => {
        setUserData({ email: "", password: "" });
      })
      .catch((error) => {
        // setIsSuccessTooltipStatus(false);
        console.log(`Что-то пошло не так! ${error} `);
      });
  }

  return (
    <section className="login">
      <div className="login__wrapper">
        <Link to="/" className="login__logo">
          <Logo />
        </Link>
        <h1 className="login__header">Рады видеть!</h1>
        <form action="" className="login__form" onSubmit={handleSubmit}>
          <span className="login__span">E-mail</span>
          <input
            className="login__input"
            type="text"
            required
            placeholder="Введите почту"
            onChange={handleChange}
            name="email"
          />
          <span className="login__span">Пароль</span>
          <input
            className="login__input"
            type="password"
            required
            placeholder="Введите пароль"
            onChange={handleChange}
            name="password"
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

import { Link } from "react-router-dom";
import "./Register.css";
import Logo from "../Logo/Logo";
import { useState } from "react";
import { useValidationForm } from "../../utils/useValidationForm";

function Register({ handleRegister }) {
  const { values, errors, isValid, handleChange } = useValidationForm();

  // const [userData, setUserData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (evt) => {
  //   const { name, value } = evt.target;
  //   setUserData({
  //     ...userData,
  //     [name]: value,
  //   });
  // };

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister(values)
      .then(() => {
        setUserData({ name: "", email: "", password: "" });
      })
      .catch((error) => {
        // setIsSuccessTooltipStatus(false);
        console.log(`Что-то пошло не так! ${error} `);
      });
  }
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   handleRegister(userData)
  //     .then(() => {
  //       setUserData({ name: "", email: "", password: "" });
  //     })
  //     .catch((error) => {
  //       // setIsSuccessTooltipStatus(false);
  //       console.log(`Что-то пошло не так! ${error} `);
  //     });
  // }

  return (
    <section className="register">
      <div className="register__wrapper">
        <Link to="/" className="register__logo">
          <Logo />
        </Link>
        <h1 className="register__header">Добро пожаловать!</h1>
        <form action="" className="register__form" onSubmit={handleSubmit}>
          <span className="register__span">Имя</span>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Введите имя"
            onChange={handleChange}
            name="name"
          />
          <span className="register__span">E-mail</span>
          <input
            className="register__input"
            type="text"
            required
            placeholder="Введите почту"
            onChange={handleChange}
            name="email"
          />
          <span className="register__span">Пароль</span>
          <input
            className="register__input"
            type="password"
            required
            placeholder="Введите пароль"
            onChange={handleChange}
            name="password"
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

import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <div>
        <img src="logo.png" alt="Логотип" />
      </div>
      <div className="navigation__buttons">
        <a
          className="navigation__sigh-up"
          href="https://yandex.ru/search/?lr=21341"
        >
          Регистрация
        </a>
        <button className="navigation__sigh-in">Войти</button>
      </div>
    </div>
  );
}

export default Navigation;

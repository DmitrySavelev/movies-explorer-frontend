import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo"></div>
      <div className="header__buttons">
        <a
          className="header__button header__button_film"
          href="https://yandex.ru/search/?lr=21341"
        >
          Фильмы
        </a>
        <a
          className="header__button header__button_saved-film"
          href="https://yandex.ru/search/?lr=21341"
        >
          Сохранённые фильмы
        </a>
        <div className="header__button header__button_profile">
          <img src="profile.png" alt="Аккаунт" />
        </div>
      </div>
    </div>
  );
}

export default Header;

import "./Profile.css";
import Header from "../Header/Header";

function Profile({ handleClick }) {
  return (
    <section className="big-wrapper">
      <Header handleClick={handleClick} />
      <div className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__header">Привет, Дмитрий!</h1>
          <form className="profile__form">
            <div className="profile__form_field profile__form_line">
              <span className="profile__span">Имя</span>
              <input
                className="profile__input"
                type="text"
                required
                placeholder="Дмитрий"
              />
            </div>
            <div className="profile__form_field">
              <span className="profile__span">E-mail</span>
              <input
                className="profile__input"
                type="text"
                required
                placeholder="pochta@yandex.ru"
              />
            </div>
            <span className="profile__form_edit">Редактировать</span>
            <span className="profile__form_exit">Выйти из аккаунта</span>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;

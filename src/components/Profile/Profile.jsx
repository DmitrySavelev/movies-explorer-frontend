import { Link } from "react-router-dom";
import "./Profile.css";
import { useEffect } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import { useValidationForm } from "../../utils/useValidationForm";

function Profile({ reset, onSignOut, onUpdateUser, responseMessage }) {
  const CurrentUser = useContext(CurrentUserContext);
  const { values, errors, isValid, setValues, setIsValid, handleChange } =
    useValidationForm();

  useEffect(() => {
    reset();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (CurrentUser) {
      setValues({
        name: CurrentUser?.data?.name,
        email: CurrentUser?.data?.email,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CurrentUser, setValues]);

  useEffect(() => {
    if (
      CurrentUser.name === values.name &&
      CurrentUser.email === values.email
    ) {
      setIsValid(false);
    }
  }, [CurrentUser, setIsValid, values]);

  function handleSubmit(e) {
    e.preventDefault();
    reset();
    onUpdateUser(values);
  }

  return (
    <section className="big-wrapper">
      <div className="profile">
        <div className="profile__wrapper">
          <h1 className="profile__header">Привет, Дмитрий!</h1>
          <form className="profile__form" onSubmit={handleSubmit}>
            <div className="profile__form_field profile__form_line">
              <span className="profile__span">Имя</span>
              <input
                className="profile__input"
                type="text"
                id="name"
                required
                minLength="2"
                maxLength="30"
                value={values.name || ""}
                onChange={handleChange}
                name="name"
              />
            </div>
            <span className="profile__form_error" id="input-error">
              {errors.name || ""}
            </span>
            <div className="profile__form_field">
              <span className="profile__span">E-mail</span>
              <input
                className="profile__input"
                type="email"
                id="email"
                required
                value={values.email || ""}
                onChange={handleChange}
                name="email"
              />
            </div>
            <span className="profile__form_error" id="input-error">
              {errors.email || ""}
            </span>
            <span
              className={`profile__form_response-error ${
                responseMessage.message && "profile__form_response-message"
              }`}
            >
              {responseMessage.error || responseMessage.message}
            </span>
            {!isValid ? (
              <button
                type="button"
                className="profile__form_edit profile__form_edit_disable"
                disabled
              >
                Редактировать
              </button>
            ) : (
              <button type="submit" className="profile__form_edit">
                Сохранить
              </button>
            )}
            <Link
              to="/"
              className="profile__form_exit"
              onClick={() => {
                onSignOut();
              }}
            >
              <span>Выйти из аккаунта</span>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;

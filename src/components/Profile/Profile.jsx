import { Link } from "react-router-dom";
import "./Profile.css";
import { useEffect, useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

function Profile({ onSignOut, onUpdateUser }) {
  const CurrentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (CurrentUser.data) {
      setName(CurrentUser.data.name);
      setEmail(CurrentUser.data.email);
    }
  }, [CurrentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({ name: name, email: email });
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
                required
                value={name}
                onChange={handleNameChange}
                name="name"
              />
            </div>
            <div className="profile__form_field">
              <span className="profile__span">E-mail</span>
              <input
                className="profile__input"
                type="text"
                required
                onChange={handleEmailChange}
                name="email"
                value={email}
              />
            </div>
            <button className="profile__form_edit">Редактировать</button>
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

// const EditProfilePopup = ({ title, name, isOpen, onClose, onUpdateUser }) => {
//   const currentUser = useContext(CurrentUserContext);
//   const [nameUser, setNameUser] = useState("");
//   const [description, setDescription] = useState("");

//   const handleNameChange = (e) => {
//     setNameUser(e.target.value);
//   };

//   const handleDescriptionChange = (e) => {
//     setDescription(e.target.value);
//   };

//   function handleSubmit(e) {
//     e.preventDefault();
//     // Передаём значения управляемых компонентов во внешний обработчик
//     onUpdateUser({
//       name: nameUser,
//       about: description,
//     });
//   }

//   useEffect(() => {
//     setNameUser(currentUser.name);
//     setDescription(currentUser.about);
//   }, [currentUser, isOpen]);

//   return (
//     <PopupWithForm
//       title={title}
//       name={name}
//       isOpen={isOpen}
//       onClose={onClose}
//       onSubmit={handleSubmit}
//     >
//       <label className="popup__form-field">
//         <input
//           name="inputName"
//           value={nameUser}
//           onChange={handleNameChange}
//           type="text"
//           id="name-input"
//           className="popup__input popup__input_name"
//           placeholder="Ваше имя"
//           minLength="2"
//           maxLength="40"
//           required
//         />
//         <span className="popup__error name-input-error"></span>
//       </label>
//       <label className="popup__form-field">
//         <input
//           name="inputJob"
//           value={description}
//           onChange={handleDescriptionChange}
//           type="text"
//           id="job-input"
//           className="popup__input popup__input_job"
//           placeholder="Ваша специализация"
//           minLength="2"
//           maxLength="200"
//           required
//         />
//         <span className="popup__error job-input-error"></span>
//       </label>
//     </PopupWithForm>
//   );
// };

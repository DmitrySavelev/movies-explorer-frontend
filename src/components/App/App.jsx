import Main from "../Main/Main";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Main/>
    </div>
  );
}

export default App;

// import Header from "./Header";
// import Main from "./Main";
// import Footer from "./Footer";
// import ImagePopup from "./ImagePopup";
// import { useState, useEffect } from "react";
// import EditAvatarPopup from "./EditAvatarPopup";
// import EditProfilePopup from "./EditProfilePopup";
// import AddPlacePopup from "./AddPlacePopup";
// import PopupWithForm from "./PopupWithForm";
// import { api } from "../utils/Api";
// import { register, authorize, checkToken } from "../utils/Auth";
// import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import Login from "./Login";
// import Register from "./Register";
// import ProtectedRoute from "./ProtectedRoute";
// import InfoTooltip from "./InfoTooltip";

// function App() {

//   return (
//     <CurrentUserContext.Provider value={currentUser}>
//       <div className="page">
//         <Header
//           userData={userData}
//           location={location}
//           onSignOut={handleSignOut}
//         />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               loggedIn ? (
//                 <Navigate to="/main" replace />
//               ) : (
//                 <Navigate to="/signin" replace />
//               )
//             }
//           />
//           <Route
//             path="/signin"
//             element={
//               <Login
//                 title="Вход"
//                 submitValue="Войти"
//                 handleLogin={handleLogin}
//               />
//             }
//           />
//           <Route
//             path="/signup"
//             element={
//               <Register
//                 title="Регистрация"
//                 submitValue="Зарегистрироваться"
//                 handleRegister={handleRegister}
//                 setIsSuccessTooltipStatus={setIsSuccessTooltipStatus}
//               />
//             }
//           />
//           <Route
//             path="/main"
//             element={
//               <ProtectedRoute
//                 element={Main}
//                 onEditProfile={handleEditProfileClick}
//                 onAddPlace={handleAddPlaceClick}
//                 onEditAvatar={handleEditAvatarClick}
//                 onCardDelete={handleCardDelete}
//                 onCardClick={handleCardClick}
//                 onCardLike={handleCardLike}
//                 cards={cards}
//                 loggedIn={loggedIn}
//               />
//             }
//           />
//         </Routes>
//         <Footer />
//         <ImagePopup card={selectedCard} onClose={closeAllPopups} />
//         <EditAvatarPopup
//           title="Обновить аватар"
//           name="avatar"
//           isOpen={isEditAvatarPopupOpen}
//           onClose={closeAllPopups}
//           onUpdateAvatar={handleUpdateAvatar}
//         />
//         <EditProfilePopup
//           title="Редактировать профиль"
//           name="edit"
//           isOpen={isEditProfilePopupOpen}
//           onClose={closeAllPopups}
//           onUpdateUser={handleUpdateUser}
//         />
//         <AddPlacePopup
//           title="Новое место"
//           name="card"
//           isOpen={isAddPlacePopupOpen}
//           onClose={closeAllPopups}
//           onAddPlace={handleAddPlaceSubmit}
//         />
//         <InfoTooltip
//           isOpen={isOpenInfoTooltip}
//           onClose={closeAllPopups}
//           isRequestStatus={isSuccessTooltipStatus}
//           text={
//             isSuccessTooltipStatus
//               ? "Вы успешно зарегистрировались!"
//               : "Что-то пошло не так!"
//           }
//         />
//         <PopupWithForm title="Вы уверены?" name="delete" buttonName="Да" />
//       </div>
//     </CurrentUserContext.Provider>
//   );
// }

// export default App;

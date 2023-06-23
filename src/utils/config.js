export const MESSAGES = {
  LOGIN_ERROR: 'Неправильно указан email или пароль',
  REGISTER_ERROR: 'При регистрации пользователя произошла ошибка',
  EDIT_USER_INFO_ERROR: 'При обновлении профиля произошла ошибка',
  SUCCESS_MESSAGE: 'Данные успешно обновлены',
  EMAIL_ERROR: 'Пользователь с таким email уже существует',
  FAILED_ERROR: 'Что-то пошло не так...',
  CARD_LIKE_ERROR: 'Фильм не удалось добавить в сохраненные',
  CARD_DELETE_ERROR: 'Не удалось удалить фильм из сохраненных',
  LOAD_MOVIES_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}

export const DEVICE_WIDTH = {
  DESKTOP: 1279,
  TABLET: 767,
  MOBILE: 320
}

export const MOVIE_COUNT = {
  DESKTOP: 12,
  TABLET: 8,
  MOBILE: 5
}
export const MOVIE_COUNT_MORE = {
  DESKTOP: 3,
  TABLET: 2,
  MOBILE: 2
}

export const SHORT_MOVIE_LENGTH = 40

export const BASE_MOVIES_API_URL = 'https://api.nomoreparties.co'
export const BASE_MOVIES_API_URL_FULL = 'https://api.nomoreparties.co/beatfilm-movies';

// export const BASE_URL = "http://localhost:3001/";
export const BASE_URL = "https://api.movies.savelev.nomoredomains.monster/";

export const getTimeFromMins = (mins) => {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return minutes === 0
    ? hours + "ч "
    : hours === 0
      ? minutes + "м"
      : hours + "ч " + minutes + "м";
};
import { BASE_URL } from "./Auth.js";
// const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class Api {

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('ошибка');
  }

  getUserData() {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}users/me`, {
      headers: {
        authorization: `Bearer ${token}`
      },
    })
      .then(this._handleResponse)
  }

  editProfile(infoData) {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}users/me`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(infoData)
    })
      .then(this._handleResponse)
  }

  addMovie = (inputValues) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}movies`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        country: inputValues.country,
        director: inputValues.director,
        duration: inputValues.duration,
        year: inputValues.year,
        description: inputValues.description,
        image: `https://api.nomoreparties.co/${inputValues.image.url}`,
        trailerLink: inputValues.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${inputValues.image.url}`,
        movieId: String(inputValues.id),
        nameRU: inputValues.nameRU,
        nameEN: inputValues.nameEN,
      })
    })
      .then(this._handleResponse);
  }

  deleteMovie = (movieId) => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}movies/${movieId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      }
    })
      .then(this._handleResponse);
  };

  getSavedMovies = () => {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}movies`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      }
    })
      .then(this._handleResponse);
  }
}

export const mainApi = new Api(BASE_URL);
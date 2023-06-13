const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

class Api {

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('ошибка');
  }

  getInitialCards() {
    return fetch(BASE_URL, {
      headers: {
        "content-type": "application/json",
      },
    })

      .then(this._handleResponse)
  }

}

export const moviesApi = new Api(BASE_URL);
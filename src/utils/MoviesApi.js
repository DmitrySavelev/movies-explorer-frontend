import { BASE_MOVIES_API_URL_FULL } from "../utils/config";

class Api {

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    }
    throw new Error('ошибка');
  }

  getInitialCards() {
    return fetch(BASE_MOVIES_API_URL_FULL, {
      headers: {
        "content-type": "application/json",
      },
    })

      .then(this._handleResponse)
  }

}

export const moviesApi = new Api(BASE_MOVIES_API_URL_FULL);
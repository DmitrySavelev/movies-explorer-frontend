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

  createMovie(moviesData) {
    const token = localStorage.getItem('token');
    return fetch(`${BASE_URL}movies`, {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${token}`
      },
      body: JSON.stringify(moviesData)
    })
      .then(this._handleResponse)
  }

  // deleteCard(id) {
  //   const token = localStorage.getItem('token');
  //   return fetch(`${BASE_URL}cards/${id}`, {
  //     method: 'DELETE',
  //     headers: {
  //       authorization: `Bearer ${token}`
  //     },
  //   })
  //     .then(this._handleResponse)
  // }

  // changeLikeCardStatus(id, isLiked) {
  //   const token = localStorage.getItem('token');
  //   const selectMethod = isLiked ? 'DELETE' : 'PUT';
  //   return fetch(`${BASE_URL}cards/${id}/likes`, {
  //     method: `${selectMethod}`,
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then(this._handleResponse)
  // }

}

export const mainApi = new Api(BASE_URL);

// import { BASE_URL } from "./Auth.js";
// // const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// class Api {

//   _handleResponse(res) {
//     if (res.ok) {
//       return res.json();
//     }
//     throw new Error('ошибка');
//   }

//   getInitialCards() {
//     // const token = localStorage.getItem('token');
//     return fetch(BASE_URL)
//       // return fetch(`${BASE_URL}`, {
//       //   headers: {
//       //     // authorization: `Bearer ${token}`
//       //     "content-type": "application/json",
//       //   },
//       // })
//       .then(this._handleResponse)
//   }

//   // getInitialData() {
//   //   return Promise.all([this.getUserData(), this.getInitialCards()]);
//   // }

//   // getUserData() {
//   //   const token = localStorage.getItem('token');
//   //   return fetch(`${BASE_URL}users/me`, {
//   //     headers: {
//   //       authorization: `Bearer ${token}`
//   //     },
//   //   })
//   //     .then(this._handleResponse)
//   // }



//   // editProfile(infoData) {
//   //   const token = localStorage.getItem('token');
//   //   return fetch(`${BASE_URL}users/me`, {
//   //     method: 'PATCH',
//   //     headers: {
//   //       "content-type": "application/json",
//   //       authorization: `Bearer ${token}`
//   //     },
//   //     body: JSON.stringify(infoData)
//   //   })
//   //     .then(this._handleResponse)
//   // }

//   // addNewCard(cardsData) {
//   //   const token = localStorage.getItem('token');
//   //   return fetch(`${BASE_URL}cards`, {
//   //     method: 'POST',
//   //     headers: {
//   //       "content-type": "application/json",
//   //       authorization: `Bearer ${token}`
//   //     },
//   //     body: JSON.stringify(cardsData)
//   //   })
//   //     .then(this._handleResponse)
//   // }

//   // deleteCard(id) {
//   //   const token = localStorage.getItem('token');
//   //   return fetch(`${BASE_URL}cards/${id}`, {
//   //     method: 'DELETE',
//   //     headers: {
//   //       authorization: `Bearer ${token}`
//   //     },
//   //   })
//   //     .then(this._handleResponse)
//   // }

//   // changeLikeCardStatus(id, isLiked) {
//   //   const token = localStorage.getItem('token');
//   //   const selectMethod = isLiked ? 'DELETE' : 'PUT';
//   //   return fetch(`${BASE_URL}cards/${id}/likes`, {
//   //     method: `${selectMethod}`,
//   //     headers: {
//   //       authorization: `Bearer ${token}`,
//   //       "content-type": "application/json",
//   //     },
//   //   })
//   //     .then(this._handleResponse)
//   // }

//   // updateAvatar(avatar) {
//   //   const token = localStorage.getItem('token');
//   //   return fetch(`${BASE_URL}users/me/avatar`, {
//   //     method: 'PATCH',
//   //     headers: {
//   //       "content-type": "application/json",
//   //       authorization: `Bearer ${token}`
//   //     },
//   //     body: JSON.stringify({ avatar })
//   //   })
//   //     .then(this._handleResponse)
//   // }

// }

// export const api = new Api(BASE_URL);
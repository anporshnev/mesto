export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  test() {
    console.log(`'${this._url}users/me'`)
    console.log(this._headers)
  }

  // onResultQuery() {
  //   (res) => {
  //     if (res.ok) {
  //       return res.json();
  //     }
  //     return Promise.reject(`Ошибка: ${res.status}`);
  //   };
  // }

  getUserInfoServ() {
    return fetch(`${this._url}users/me`, {
      headers: this._headers
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
  }
}


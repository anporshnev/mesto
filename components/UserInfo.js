export default class UserInfo {
  constructor({usernameSelector, aboutSelector}) {
    this._usernameSelector = usernameSelector;
    this._aboutSelector = aboutSelector;
    this._username = document.querySelector(this._usernameSelector);
    this._about = document.querySelector(this._aboutSelector);
  }

  getUserInfo() {
    const dataProfile = {};
    dataProfile.name = this._username.textContent;
    dataProfile.about = this._about.textContent;

    return dataProfile;
  }

  setUserInfo({username, about}) {
    this._username.textContent = username;
    this._about.textContent = about;
  }
}


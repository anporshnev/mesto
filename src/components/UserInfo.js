export default class UserInfo {
  constructor({usernameSelector, aboutSelector}) {
    this._usernameSelector = usernameSelector;
    this._aboutSelector = aboutSelector;
    this._usernameNode = document.querySelector(this._usernameSelector);
    this._aboutNode = document.querySelector(this._aboutSelector);
    this._username = '';
    this._about = '';
  }

  updateUserInfo () {
    this._usernameNode.textContent = this._username;
    this._aboutNode.textContent = this._about;
  }

  getUserInfo() {
    return {
      name: this._username,
      about: this._about
    };
  }

  setUserInfo({name, about}) {
    this._username = name;
    this._about = about;
  }
}



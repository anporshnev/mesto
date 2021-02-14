export default class UserInfo {
  constructor({usernameSelector, aboutSelector, avatarSelector}) {
    this._usernameSelector = usernameSelector;
    this._aboutSelector = aboutSelector;
    this._avatarSelector = avatarSelector;
    this._usernameNode = document.querySelector(this._usernameSelector);
    this._aboutNode = document.querySelector(this._aboutSelector);
    this._avatarNode = document.querySelector(this._avatarSelector);
    this._username = '';
    this._about = '';
    this._avatar = '';
  }

  updateUserInfo () {
    this._usernameNode.textContent = this._username;
    this._aboutNode.textContent = this._about;
    this._avatarNode.src = this._avatar;
  }

  getUserInfo() {
    return {
      name: this._username,
      about: this._about,
      avatar: this._avatar
    };
  }

  setUserInfo(data) {
    this._username = data.name;
    this._about = data.about;
    this._avatar = data.avatar;
  }
}



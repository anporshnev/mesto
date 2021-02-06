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

  setUserInfo(nameInput, aboutInput) {
    this._username.textContent = nameInput.value;
    this._about.textContent = aboutInput.value;
  }
}

// const test = new UserInfo({usernameSelector:'.profile__name', aboutSelector:'.profile__text-interests'})

// console.log(test.getUserInfo())

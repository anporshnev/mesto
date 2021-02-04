import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super (popupSelector);
    this._name = data.name;
    this._link = data.link;
    this._popupPic = this._popup.querySelector('.popup__pic');
    this._popupPicTitle = this._popup.querySelector('.popup__pic-title');
  }

  open() {
    this._popupPic.src = this._link;
    this._popupPicTitle.textContent = this._name;
    this._popupPic.alt = `Изображение места ${this._name}`;
    super.open();
  }
}


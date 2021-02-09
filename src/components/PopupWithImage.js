import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super (popupSelector);
    this._popupPic = this._popup.querySelector('.popup__pic');
    this._popupPicTitle = this._popup.querySelector('.popup__pic-title');
  }

  open(name, link) {
    this._popupPic.src = link;
    this._popupPicTitle.textContent = name;
    this._popupPic.alt = `Изображение места ${name}`;
    super.open();
  }
}


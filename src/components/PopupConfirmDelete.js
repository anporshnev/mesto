import Popup from './Popup.js';

export default class PopupConfirmDelete extends Popup {
  constructor(popupSelector, { handle }) {
    super (popupSelector);
    this._handle = handle;
  }

  open(data) {
    super.open();
    this._data = data;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', e => {
      e.preventDefault();
      this._handle(this._data);
    })
  }
}

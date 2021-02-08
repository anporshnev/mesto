import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }) {
    super (popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    const inputList = this._popup.querySelectorAll('.popup__input');
    const objForm = {};
    inputList.forEach(item => {
      objForm[item.name] = item.value;
    })

    return objForm;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', e => {
      e.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    })
  }

  close() {
    const popupForm = this._popup.querySelector('.popup__form');
    popupForm.reset();
    super.close();
  }
}


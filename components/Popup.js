export default class Popup {
  constructor (popupSelector) {
    this._popupSelector = popupSelector;
    this._popup = document.querySelector(popupSelector);

  }

  open() {
    this._popup.classList.add('popup_open');
  };

  close() {
    this._popup.classList.remove('popup_open');
  }

  _handleEscClose(e) {
    if(e.key === 'Escape') {
      this.close()
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', e => {
      if(!e.target.closest('.popup__content') || e.target.classList.contains('popup__icon-close')) {
        this.close();
      }
    });

    document.addEventListener('keydown', this._handleEscClose);

  }
}

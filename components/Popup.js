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
    const popupActive = document.querySelector('.popup_open');
    if(e.key === 'Escape' && popupActive !== null) {
      popupActive.classList.remove('popup_open');
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


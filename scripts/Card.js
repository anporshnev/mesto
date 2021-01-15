export default class Card {
  constructor(data, cardSelector, handlePreviewPicture) {
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
  }

  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardTemplate;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__title').textContent = this._name;
    this._element.querySelector('.card__image').src = this._link;

    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', () => {
      this._handleLikeIcon();
    });

    this._element.querySelector('.card__btn-remove').addEventListener('click', () => {
      this._handleDeleteCard();
    });

    this._element.querySelector('.card__image').addEventListener('click', () => {
      const objDescription = {
        name: this._name,
        link: this._link}
      this._handlePreviewPicture(objDescription);
    });
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__btn-like').classList.toggle('card__btn-like_active');
  };

  _handleDeleteCard() {
    this._element.closest('.card').remove();
  };
}


export default class Card {

  constructor(data, cardSelector, handlePreviewPicture) {
    this._name = data.name;
    this._link = data.link;
    this._like = data.likes;
    this._cardId = data._id;
    this._cardOwnerId = data.owner._id;
    this._currentUserId = data.currentUserId;
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
    this._cardImage = this._element.querySelector('.card__image');
    this._element.querySelector('.card__title').textContent = this._name;
    this._cardImage.src = this._link;
    this._cardImage.alt = `Изображение места ${this._name}`;
    this._element.querySelector('.card__like-count').textContent = this._like.length;

    this._setStateDelButton();
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

    this._cardImage.addEventListener('click', () => {
      const data = {
        name: this._name,
        link: this._link
      }
      this._handlePreviewPicture(data);
    });
  }

  _handleLikeIcon() {
    this._element.querySelector('.card__btn-like').classList.toggle('card__btn-like_active');
  };

  _handleDeleteCard() {
    this._element.closest('.card').remove();
  };

  _setStateDelButton() {
    if (this._currentUserId != this._cardOwnerId) {
      this._element.querySelector('.card__btn-remove').classList.add('card__btn-remove_disable');
    }
  }
}


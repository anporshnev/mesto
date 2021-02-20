export default class Card {

  constructor(
    { name, link, likes, _id, owner, currentUserId },
    cardSelector,
    handlePreviewPicture,
    { handleDeleteCardClick, handleLikeClick }) {
    this._name = name;
    this._link = link;
    this._like = likes;
    this._cardId = _id;
    this._cardOwnerId = owner._id;
    this._currentUserId = currentUserId;
    this._cardSelector = cardSelector;
    this._handlePreviewPicture = handlePreviewPicture;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._handleLikeClick = handleLikeClick;
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

    this.setLikeCount(this._like);
    this._setStateDelButton();
    this.switchLike(this.getStateMyLike());
    this._setEventListeners();

    return this._element;
  }

  _setEventListeners() {
    this._element.querySelector('.card__btn-like').addEventListener('click', () => {
      this._handleLikeClick(this._cardId);
    });

    this._element.querySelector('.card__btn-remove').addEventListener('click', () => {
      this._handleDeleteCardClick(this._cardId);
    });

    this._cardImage.addEventListener('click', () => {
      const data = {
        name: this._name,
        link: this._link
      }
      this._handlePreviewPicture(data);
    });
  }

  handleDeleteCard() {
    this._element.closest('.card').remove();
  };

  _setStateDelButton() {
    if (this._currentUserId != this._cardOwnerId) {
      this._element.querySelector('.card__btn-remove').classList.add('card__btn-remove_disable');
    }
  };

  getStateMyLike() {
    return Boolean (this._like.find(item => item._id === this._currentUserId));
  }

  switchLike(state) {
    if(state) {
      this._element.querySelector('.card__btn-like').classList.add('card__btn-like_active');
    } else {
      this._element.querySelector('.card__btn-like').classList.remove('card__btn-like_active');
    }
  }

  setLikeCount(data) {
    this._element.querySelector('.card__like-count').textContent = data.length;
  }

  reloadDataCard(data) {
    this._like = data.likes;
  }

}


const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');
const profileButtonClose = document.querySelector('.profile-close');
const formProfile = document.querySelector('.form-profile');
const formCard = document.querySelector('.form-card');

const popupNode = document.querySelector('.popup');
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const cardButtonClose = document.querySelector('.card-close');

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const popupInputPlaceName = document.querySelector('.popup__input_content_place-name');
const popupInputImageLink = document.querySelector('.popup__input_content_image-link');

const elements = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-image');
const popupImageClose = document.querySelector('.image-close');

let composeCard = ({name, link}) => {
  const cardTemplate = document.querySelector('#card').content;
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.card__image').src = link;
  newCard.querySelector('.card__image').alt = `Изображение места ${name}`;
  newCard.querySelector('.card__title').textContent = name;
  const card = newCard.querySelector('.card');
  card.addEventListener('click', onLikeButton);
  card.addEventListener('click', removeCard);
  card.addEventListener('click', renderPopupImage);
  return newCard;
};

let renderList =() => {
  const cardItems = initialCards.map(composeCard);
  elements.append(...cardItems);
}

let addNewCard = () => {
  const inputNamePlace =  popupInputPlaceName.value;
  const inputLinkImage =  popupInputImageLink.value;
  if (inputNamePlace !== '' && inputLinkImage !== '') {
    const newCard = composeCard({name: inputNamePlace, link: inputLinkImage});
    elements.prepend(newCard);
    popupInputPlaceName.value = '';
    popupInputImageLink.value = '';
  }
}

let onLikeButton = e => {
  const eventTarget = e.target;
  if(eventTarget.classList.contains('card__btn-like')) {
    eventTarget.classList.toggle('card__btn-like_active');
  }
}

let removeCard = e => {
  const eventTarget = e.target;
  if(eventTarget.classList.contains('card__btn-remove')) {
    const currentTarget = e.currentTarget;
    currentTarget.removeEventListener('click', onLikeButton);
    currentTarget.removeEventListener('click', removeCard);
    currentTarget.removeEventListener('click', renderPopupImage);
    currentTarget.remove();
  }
}

let renderPopupImage = e => {
  const popupPic = popupImage.querySelector('.popup__pic');
  const popupPicTitle = popupImage.querySelector('.popup__pic-title');
  const eventTarget = e.target;
  const currentTarget = e.currentTarget;
  if(eventTarget.classList.contains('card__image')) {
    popupPic.src = eventTarget.src;
    popupPic.alt = eventTarget.alt;
    const cardImageTitle = currentTarget.querySelector('.card__title');
    popupPicTitle.textContent = cardImageTitle.textContent;
    openPopup(popupImage);
  }
}

renderList();

let openPopup = popup => {
  popup.classList.add('popup_open');
}

let closePopup = popup => {
  popup.classList.remove('popup_open');
}

let handleProfileSubmit = event => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  closePopup(popupProfile);
}

let handleCardSubmit = event => {
  event.preventDefault();
  addNewCard();
  closePopup(popupCard);
}

profileButtonEdit.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
  openPopup(popupProfile);
})

profileButtonAdd.addEventListener('click', () => {
  openPopup(popupCard);
});

profileButtonClose.addEventListener('click', () => {
  closePopup(popupProfile);
})

cardButtonClose.addEventListener('click', () => {
  closePopup(popupCard);
})

popupImageClose.addEventListener('click', () => {
  closePopup(popupImage);
})

formProfile.addEventListener('submit', handleProfileSubmit);

formCard.addEventListener('submit', handleCardSubmit);













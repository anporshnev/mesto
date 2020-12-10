const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');
const profileButtonClose = document.querySelector('.profile-close');
const formProfile = document.querySelector('.form-profile');
const formCard = document.querySelector('.form-card');

const popupNode = document.querySelector('.popup');
const popupContent = document.querySelector('.popup__content');
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const cardButtonClose = document.querySelector('.card-close');

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const popupInputPlaceName = document.querySelector('.popup__input_content_place-name');
const popupInputImageLink = document.querySelector('.popup__input_content_image-link');

const elements = document.querySelector('.elements');

const getInitialElements = initialCards.forEach(item =>{
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = `Изображение места ${item.name}`;
  cardElement.querySelector('.card__title').textContent = item.name;
  return elements.append(cardElement);
});

 const addCard = () => {
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = popupInputImageLink.value;
  cardElement.querySelector('.card__image').alt = `Изображение места ${popupInputPlaceName.value}`;
  cardElement.querySelector('.card__title').textContent = popupInputPlaceName.value;
  return elements.prepend(cardElement);
}

let openPopup = popup => {
  popup.classList.add('popup_open');
}

let closePopup = popup => {
  popup.classList.remove('popup_open');
}

// let closePopupButton = () => {
//   const popupButtonClose= document.querySelectorAll('.popup__icon-close');
//   popupButtonClose.forEach(item => {
//     item.addEventListener('click', (e) => {
//       const eventTarget = e.target.closest('.popup');
//       eventTarget.classList.remove('popup_open');
//     });
//   })
// }
// closePopupButton();

const handleProfileSubmit = event => {

  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  closePopup(popupProfile);
}

const handleCardSubmit = event => {
  event.preventDefault();
  addCard();
  closePopup(popupCard);
}

profileButtonEdit.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
  openPopup(popupProfile);
})

profileButtonAdd.addEventListener('click', () => {
  popupInputPlaceName.value = '';
  popupInputImageLink.value = '';
  openPopup(popupCard);
});

profileButtonClose.addEventListener('click', () => {
  closePopup(popupProfile);
})

cardButtonClose.addEventListener('click', () => {
  closePopup(popupCard);
})

formProfile.addEventListener('submit', handleProfileSubmit);

formCard.addEventListener('submit', handleCardSubmit);













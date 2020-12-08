const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');

const popupNode = document.querySelector('.popup');
const popupButtonClose= document.querySelector('.popup__icon-close');
const popupContent = document.querySelector('.popup__content');
const formProfile = document.querySelector('.popup__form');
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const popupInputPlaceName = document.querySelector('.popup__input_content_place-name');
const popupInputImageLink = document.querySelector('.popup__input_content_image-link');

const elements = document.querySelector('.elements');

const sendInitialElements = initialCards.forEach(item =>{
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = `Изображение места ${item.name}`;
  cardElement.querySelector('.card__title').textContent = item.name;
  return elements.append(cardElement);
})


let openPopupProfile = () => {
  popupProfile.classList.add('popup_open');
  function getValuesProfile() {
      popupInputName.value = profileName.textContent;
      popupInputInterest.value = profileInterests.textContent;
    }
  return getValuesProfile();
}

let closePopupProfile = () => popupProfile.classList.remove('popup_open');
// Будет универсальная функция закрытия
let openPopupCard = () => popupCard.classList.add('popup_open');

let handleFormSubmit = (event) => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  closePopupProfile();
}


profileButtonEdit.addEventListener('click', openPopupProfile);

profileButtonAdd.addEventListener('click', openPopupCard);

formProfile.addEventListener('submit', handleFormSubmit);











const profileButtonEdit = document.querySelector('.profile__btn-edit');

const popupButtonClose= document.querySelector('.popup__icon-close');
const popupNode = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const formElement = document.querySelector('.popup__form');

function togglePopupVisibility() {
  popupNode.classList.toggle('popup_open');
}

function getValuesProfile() {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
}

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  togglePopupVisibility();
}

profileButtonEdit.addEventListener('click', togglePopupVisibility);
profileButtonEdit.addEventListener('click', getValuesProfile);
popupButtonClose.addEventListener('click', togglePopupVisibility);

formElement.addEventListener('submit', handleFormSubmit);

const profileButtonEdit = document.querySelector('.profile__btn-edit');
const popupButtonClose= document.querySelector('.popup__icon-close');
const popupNode = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');
const popupInput = document.querySelectorAll('.popup__input');

profileButtonEdit.addEventListener('click', togglePopupVisibility);
profileButtonEdit.addEventListener('click', getValuesProfile);
popupButtonClose.addEventListener('click', togglePopupVisibility);

function togglePopupVisibility() {
  popupNode.classList.toggle('popup_open');
}

function getValuesProfile() {
  popupInput[0].value = profileName.textContent;
  popupInput[1].value = profileInterests.textContent;
}

const formElement = document.querySelector('.popup__form');

function handleFormSubmit (event) {
  event.preventDefault();
  profileName.textContent = popupInput[0].value;
  profileInterests.textContent = popupInput[1].value;
  togglePopupVisibility();
}

formElement.addEventListener('submit', handleFormSubmit);

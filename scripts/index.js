const profileButtonEdit = document.querySelector('.profile__btn-edit');

const popupButtonClose= document.querySelector('.popup__icon-close');
const popupNode = document.querySelector('.popup');

const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const formElement = document.querySelector('.popup__form');

const elements = document.querySelector('.elements');

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



const sendInitialElements = initialCards.forEach(function(item){
  const cardTemplate = document.querySelector('#card').content;
  const cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector('.card__image').src = item.link;
  cardElement.querySelector('.card__image').alt = `Изображение места ${item.name}`;
  cardElement.querySelector('.card__title').textContent = item.name;

  return elements.append(cardElement);
})








const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');



const popupProfile = document.querySelector('.popup-profile');


const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

import {
  cardSectionSelector,
  cardTemplateSelector,
  popupProfileSelector,
  popupCardSelector,
  formProfileSelector,
  formCardSelector,

  formProfile,
  formCard,
  popupCard
} from '../utils/constants.js';

import  Card  from '../components/Card.js';
import Section from '../components/Section.js';
import {initialCards} from '../components/initial-arr.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, validationConfig} from '../components/FormValidator.js';

const handlePreviewPicture = (data, popupSelector) => {
  const popupImage = new PopupWithImage (data, popupSelector);
  popupImage.open();
  popupImage.setEventListeners();
}

const renderCards = new Section ({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, cardTemplateSelector, handlePreviewPicture);
    const cardElement = card.generateCard();

    renderCards.addItem(cardElement);
    },
  },
  cardSectionSelector
);

renderCards.renderItems();

const addNewCard = new PopupWithForm(
  popupCardSelector, {
    handleFormSubmit: (dataForm) => {
      const card = new Card(dataForm, cardTemplateSelector, handlePreviewPicture);
      const cardElement = card.generateCard();

      renderCards.addItem(cardElement);
      addNewCard.close();
    }
  }
);

addNewCard.setEventListener();

const validationFormProfile = new FormValidator(validationConfig, formProfileSelector);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(validationConfig, formCardSelector);
validationFormCard.enableValidation();

// const openPopup = popup => {
//   popup.classList.add('popup_open');
//   document.addEventListener('keydown', closePopupEsc);
// };

// const closePopup = popup => {
//   popup.classList.remove('popup_open');
//   document.removeEventListener('keydown', closePopupEsc);
// };

// const closePopupEsc = e => {
//   const popupActive = document.querySelector('.popup_open');
//   if(e.key === 'Escape' && popupActive !== null) {
//     closePopup(popupActive);
//   }
// };

// const handleProfileSubmit = () => {
//   profileName.textContent = popupInputName.value;
//   profileInterests.textContent = popupInputInterest.value;
//   closePopup(popupProfile);
// };

// const handleCardSubmit = () => {
//   addNewCard();
//   closePopup(popupCard);
// };

profileButtonEdit.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
  validationFormProfile.clearErrorsForm(formProfile);
  const submitButton = popupProfile.querySelector('.popup__submit');
  validationFormProfile.setButtonState(submitButton, true);
  // openPopup(popupProfile);
  const profilePopup = new Popup (popupProfileSelector);
  profilePopup.open();
  profilePopup.setEventListeners();
});

profileButtonAdd.addEventListener('click', () => {
  addNewCard.open();
  const submitButton = popupCard.querySelector('.popup__submit');
  validationFormCard.setButtonState(submitButton, false);
  validationFormCard.clearErrorsForm(formCard);
});

// // Закрытие попапа шелчком по оверлею и по крестику
// popupProfile.addEventListener('click', e => {
//   if(!e.target.closest('.popup__content') || e.target.classList.contains('popup__icon-close')) {
//     closePopup(popupProfile);
//   }
// })

// // Закрытие попапа шелчком по оверлею и по крестику
// popupCard.addEventListener('click', e => {
//   if(!e.target.closest('.popup__content') || e.target.classList.contains('popup__icon-close')) {
//     closePopup(popupCard);
//   }
// })

// // Закрытие попапа шелчком по оверлею и по крестику
// popupImage.addEventListener('click', e => {
//   if(!e.target.closest('.popup__image-conteiner') || e.target.classList.contains('popup__icon-close')) {
//     closePopup(popupImage);
//   }
// })

// formProfile.addEventListener('submit', handleProfileSubmit);

// formCard.addEventListener('submit', handleCardSubmit);













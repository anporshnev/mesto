
const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');


import {
  cardSectionSelector,
  cardTemplateSelector,
  popupProfileSelector,
  popupCardSelector,
  formProfileSelector,
  formCardSelector,
  profileSelectors,

  formProfile,
  formCard,
  popupCard,
  popupInputName,
  popupInputInterest,
  popupProfile
} from '../utils/constants.js';

import  Card  from '../components/Card.js';
import Section from '../components/Section.js';
import {initialCards} from '../components/initial-arr.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, validationConfig} from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';

const profileInfo = new UserInfo(profileSelectors);

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

// const test = new PopupWithForm(
//   formProfileSelector, {
//     handleFormSubmit: (dataForm) => {
//       profileInfo.setUserInfo(dataForm);
//     }
//   }
// )
// test.setEventListeners();


const validationFormProfile = new FormValidator(validationConfig, formProfileSelector);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(validationConfig, formCardSelector);
validationFormCard.enableValidation();

profileButtonEdit.addEventListener('click', () => {
  const getUserInfo = profileInfo.getUserInfo();
  popupInputName.value = getUserInfo.name;
  popupInputInterest.value = getUserInfo.about;

  validationFormProfile.clearErrorsForm(formProfile);
  const submitButton = popupProfile.querySelector('.popup__submit');
  validationFormProfile.setButtonState(submitButton, true);

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














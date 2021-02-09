import './index.css';

import {
  cardSectionSelector,
  cardTemplateSelector,
  popupProfileSelector,
  popupCardSelector,
  formProfileSelector,
  formCardSelector,
  profileSelectors,

  popupInputName,
  popupInputInterest,
  profileButtonEdit,
  profileButtonAdd

} from '../utils/constants.js';

import  Card  from '../components/Card.js';
import Section from '../components/Section.js';
import {initialCards} from '../utils/initial-arr.js';
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

const createInstanceCard = item => {
  const card = new Card(item, cardTemplateSelector, handlePreviewPicture);
  const cardElement = card.generateCard();

  renderCards.addItem(cardElement);
}

const renderCards = new Section ({
  items: initialCards,
  renderer: (item) =>
  createInstanceCard(item),
  },
  cardSectionSelector
);

renderCards.renderItems();

const addNewCard = new PopupWithForm(
  popupCardSelector, {
    handleFormSubmit: (dataForm) => {
      createInstanceCard(dataForm);
      addNewCard.close();
    }
  }
);

addNewCard.setEventListeners();

const newInfoProfile = new PopupWithForm(
  popupProfileSelector, {
    handleFormSubmit: (dataForm) => {
      profileInfo.setUserInfo(dataForm);
      newInfoProfile.close();
    }
  }
);

newInfoProfile.setEventListeners();

const validationFormProfile = new FormValidator(validationConfig, formProfileSelector);
validationFormProfile.enableValidation();

const validationFormCard = new FormValidator(validationConfig, formCardSelector);
validationFormCard.enableValidation();

profileButtonEdit.addEventListener('click', () => {
  const getUserInfo = profileInfo.getUserInfo();
  popupInputName.value = getUserInfo.name;
  popupInputInterest.value = getUserInfo.about;

  validationFormProfile.clearErrorsForm();
  validationFormProfile.enableSubmitButton();

  newInfoProfile.open();
});

profileButtonAdd.addEventListener('click', () => {
  addNewCard.open();

  validationFormCard.clearErrorsForm();
  validationFormCard.disableSubmitButton();
});














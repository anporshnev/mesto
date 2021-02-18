import './index.css';

import {
  apiConfig,

  cardSectionSelector,
  cardTemplateSelector,
  popupProfileSelector,
  popupCardSelector,
  popupImageSelector,
  popupConfirmSelector,
  formProfileSelector,
  formCardSelector,
  profileSelectors,

  popupInputName,
  popupInputInterest,
  profileButtonEdit,
  profileButtonAdd

} from '../utils/constants.js';

import Api from '../components/Api.js';
import Card  from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {FormValidator, validationConfig} from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupConfirmDelete from '../components/PopupConfirmDelete.js';

const api = new Api(apiConfig);

const profileInfo = new UserInfo(profileSelectors);

let userId = null;

let templateCard = null;

const errorApi = err => {
  console.error(err);
  };

const updateProfile =() => {
  api
    .getUserInfoServ()
    .then(data => {
      userId = data._id;
      profileInfo.setUserInfo(data);
      profileInfo.updateUserInfo();
    })
    .catch(errorApi)
}
updateProfile();

const popupImage = new PopupWithImage(popupImageSelector);
popupImage.setEventListeners();

const handlePreviewPicture = data => {
  popupImage.open(data);
};

const popupConfirm = new PopupConfirmDelete(popupConfirmSelector, {
  handle: (cardId) => {
    api
      .removeCard(cardId)
      .then( () => {
        templateCard.handleDeleteCard();
        popupConfirm.close();
    })
      .catch(errorApi)
  }
});
popupConfirm.setEventListeners();

const createInstanceCard = item => {
  const card = new Card({...item, currentUserId: userId}, cardTemplateSelector, handlePreviewPicture, {
    handleDeleteCardClick: (cardId) => {
      templateCard = card;
      popupConfirm.open(cardId);
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
}

const renderCards = new Section ({
  renderer: (item) => {
    renderCards.addItem(createInstanceCard(item))
  }
},
cardSectionSelector);

const cardList = () => {
  api
  .getCardList()
  .then(cardsArray => {
    renderCards.renderItems(cardsArray)
  })
  .catch(errorApi)
}
cardList();

const addNewCard = new PopupWithForm(
  popupCardSelector, {
    handleFormSubmit: (dataForm) => {
      api
        .saveNewCard(dataForm)
        .then(cardData => {
          renderCards.prependItem(createInstanceCard(cardData));
          addNewCard.close();
        })
        .catch(errorApi)
    }
  }
);
addNewCard.setEventListeners();

const newInfoProfile = new PopupWithForm(
  popupProfileSelector, {
    handleFormSubmit: (dataForm) => {
      api
        .saveUserInfoServ(dataForm)
        .then(data => {
          profileInfo.setUserInfo(data);
          profileInfo.updateUserInfo();
          newInfoProfile.close();
        })
        .catch(errorApi)
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














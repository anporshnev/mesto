const apiConfig = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-20/',
  headers: {
    authorization: 'baadb45e-be37-4889-9243-ceacbed5cc22',
    'Content-Type': 'application/json'
  }
}

const cardTemplateSelector = '.card-template_type_default';
const cardSectionSelector = '.elements';
const popupImageSelector = '.popup-image';
const popupProfileSelector = '.popup-profile';
const popupCardSelector = '.popup-card';
const popupConfirmSelector = '.popup-confirm';
const popupAvatarSelector = '.popup-avatar';
const formProfileSelector = '.form-profile';
const formCardSelector = '.form-card';
const formAvatarSelector = '.form-avatar';

const profileSelectors = {
  usernameSelector:'.profile__name',
  aboutSelector:'.profile__text-interests',
  avatarSelector: '.profile__avatar'
}

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');
const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileAvatar = document.querySelector('.profile__wrap-avatar');

export {
  apiConfig,

  cardSectionSelector,
  popupImageSelector,
  cardTemplateSelector,
  popupProfileSelector,
  popupCardSelector,
  popupConfirmSelector,
  popupAvatarSelector,
  formProfileSelector,
  formCardSelector,
  formAvatarSelector,
  profileSelectors,

  popupInputName,
  popupInputInterest,
  profileButtonEdit,
  profileButtonAdd,
  profileAvatar
};

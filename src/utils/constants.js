const cardTemplateSelector = '.card-template_type_default';
const cardSectionSelector = '.elements';
const popupImageSelector = '.popup-image';
const popupProfileSelector = '.popup-profile';
const popupCardSelector = '.popup-card';
const formProfileSelector = '.form-profile';
const formCardSelector = '.form-card';

const profileSelectors = {
  usernameSelector:'.profile__name',
  aboutSelector:'.profile__text-interests'
}

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');
const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');

export {
  cardSectionSelector,
  popupImageSelector,
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
};

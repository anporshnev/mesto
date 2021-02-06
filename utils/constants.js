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

const formProfile = document.querySelector('.form-profile');
const formCard = document.querySelector('.form-card');
const popupCard = document.querySelector('.popup-card');
const popupProfile = document.querySelector('.popup-profile');
const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');



export {
  cardSectionSelector,
  popupImageSelector,
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
};

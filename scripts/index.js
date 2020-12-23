const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');
// const profileButtonClose = document.querySelector('.profile-close');
const formProfile = document.querySelector('.form-profile');
const formCard = document.querySelector('.form-card');

const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
// const cardButtonClose = document.querySelector('.card-close');

const popupInputName = formProfile.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const popupInputPlaceName = document.querySelector('.popup__input_content_place-name');
const popupInputImageLink = document.querySelector('.popup__input_content_image-link');

const elements = document.querySelector('.elements');

const popupImage = document.querySelector('.popup-image');
// const popupImageClose = document.querySelector('.image-close');

const cardTemplate = document.querySelector('#card').content;

const popupPic = popupImage.querySelector('.popup__pic');
const popupPicTitle = popupImage.querySelector('.popup__pic-title');



const composeCard = ({name, link}) => {
  const newCard = cardTemplate.cloneNode(true);

  const cardImage = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardButtonLike = newCard.querySelector('.card__btn-like');
  const cardButtonRemove = newCard.querySelector('.card__btn-remove');

  cardImage.src = link;
  cardTitle.textContent = name;
  cardImage.alt = `Изображение места ${name}`;

  cardButtonLike.addEventListener('click', handleLikeIcon);
  cardButtonRemove.addEventListener('click', handleDeleteCard);
  cardImage.addEventListener('click', () => {
    handlePreviewPicture({name, link});
  });

  return newCard;
};

const renderList =() => {
  const cardItems = initialCards.map(composeCard);
  elements.append(...cardItems);
};

const addNewCard = () => {
  const newCard = composeCard({name: popupInputPlaceName.value, link: popupInputImageLink.value});
  elements.prepend(newCard);
  formCard.reset();
};

const handleLikeIcon = e => {
  e.target.classList.toggle('card__btn-like_active');
};

const handleDeleteCard = e => {
  e.target.closest('.card').remove();
};

const handlePreviewPicture = data => {
  popupPic.src = data.link;
  popupPicTitle.textContent = data.name;
  popupPic.alt = `Изображение места ${data.name}`;
  openPopup(popupImage);
};

renderList();

const openPopup = (popup) => {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
};

const closePopup = popup => {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
};

const closePopupEsc = e => {
  const popupActive = document.querySelector('.popup_open');
  if(e.key === 'Escape' && popupActive !== null) {
    closePopup(popupActive);
  }
};

const clearErrorsForm = (form) => {
  const listMessageErrors = form.querySelectorAll('.popup__input-error');
  const listInputErrors = form.querySelectorAll('.popup__input');

  listMessageErrors.forEach(message => {
    message.textContent = '';
  });
  listInputErrors.forEach(input => {
    input.classList.remove('popup__input_type_error');
  });
};

const handleProfileSubmit = () => {
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  closePopup(popupProfile);
};

const handleCardSubmit = () => {
  addNewCard();
  closePopup(popupCard);
};

profileButtonEdit.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
  clearErrorsForm(formProfile);
  const submitButton = popupProfile.querySelector(validationConfig.submitButtonSelector);
  setButtonState(submitButton, true, validationConfig);
  openPopup(popupProfile);
});

profileButtonAdd.addEventListener('click', () => {
  openPopup(popupCard);
  const submitButton = popupCard.querySelector(validationConfig.submitButtonSelector);
  setButtonState(submitButton, false, validationConfig);
  clearErrorsForm(formCard);
  formCard.reset();
});

// Закрытие попапа шелчком по оверлею и по крестику
popupProfile.addEventListener('click', e => {
  if(!e.target.closest('.popup__content') || e.target.classList.contains('popup__icon-close')) {
    closePopup(popupProfile);
  }
})

// Закрытие попапа шелчком по оверлею и по крестику
popupCard.addEventListener('click', e => {
  if(!e.target.closest('.popup__content') || e.target.classList.contains('popup__icon-close')) {
    closePopup(popupCard);
  }
})

// Закрытие попапа шелчком по оверлею и по крестику
popupImage.addEventListener('click', e => {
  if(!e.target.closest('.popup__image-conteiner') || e.target.classList.contains('popup__icon-close')) {
    closePopup(popupImage);
  }
})

formProfile.addEventListener('submit', handleProfileSubmit);

formCard.addEventListener('submit', handleCardSubmit);













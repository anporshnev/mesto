const profileButtonEdit = document.querySelector('.profile__btn-edit');
const profileButtonAdd = document.querySelector('.profile__btn-add');
const profileName = document.querySelector('.profile__name');
const profileInterests = document.querySelector('.profile__text-interests');
const profileButtonClose = document.querySelector('.profile-close');
const formProfile = document.querySelector('.form-profile');
const formCard = document.querySelector('.form-card');

const popupNode = document.querySelector('.popup');
// const popupContent = document.querySelector('.popup__content');
const popupProfile = document.querySelector('.popup-profile');
const popupCard = document.querySelector('.popup-card');
const cardButtonClose = document.querySelector('.card-close');
// const likeButton = document.querySelectorAll('.card__btn-like');
// const cardButtonRemove = document.querySelector('.card__btn-remove')

const popupInputName = document.querySelector('.popup__input_content_username');
const popupInputInterest = document.querySelector('.popup__input_content_about');

const popupInputPlaceName = document.querySelector('.popup__input_content_place-name');
const popupInputImageLink = document.querySelector('.popup__input_content_image-link');

const elements = document.querySelector('.elements');


let composeCard = ({name, link}) => {
  const cardTemplate = document.querySelector('#card').content;
  const newCard = cardTemplate.cloneNode(true);
  newCard.querySelector('.card__image').src = link;
  newCard.querySelector('.card__image').alt = `Изображение места ${name}`;
  newCard.querySelector('.card__title').textContent = name;
  return newCard;
};

let renderList =() => {
  const cardItems = initialCards.map(composeCard);
  console.log(cardItems);
  console.log(...cardItems);
  elements.append(...cardItems);
}

let addNewCard = () => {
  const inputNamePlace =  popupInputPlaceName.value;
  const inputLinkImage =  popupInputImageLink.value;
  const newCard = composeCard({name: inputNamePlace, link: inputLinkImage});
  console.log(newCard);
  elements.prepend(newCard);
  popupInputPlaceName.value = '';
  popupInputImageLink.value = '';
}

let removeCard = () => {
  let eventTarget = e.target;
  let currentTarget = eventTarget.closest('.card');
  currentTarget.remove();
}

renderList();

// const renderCards=
//   initialCards.forEach(item => {
//     const initialCardName = item.name;
//     const initialCardLink = item.link;
//     composeCard(initialCardName, initialCardLink);
//   })

// let addNewCard = () => {
//   const cardPlaceName = popupInputPlaceName.value;
//   const cardLink = popupInputImageLink.value;
//   if (cardPlaceName !== '' && cardLink !== '') {
//     composeCard(cardPlaceName, cardLink);
//   }
// }

// let onLikeButton = () => elements.addEventListener('click', e => {
//   let eventTarget = e.target;
//   if(eventTarget.classList.contains('card__btn-like')) {
//     eventTarget.classList.toggle('card__btn-like_active');
//   };
// })
// onLikeButton();

// let removeCard = () => elements.addEventListener('click', e => {
//   let eventTarget = e.target;
//   if(eventTarget.classList.contains('card__btn-remove')) {
//     let currentTarget = eventTarget.closest('.card');
//     currentTarget.remove();
//   };
// })
// removeCard();

// let onLikeButton = likeButton => likeButton.classList.toggle('card__btn-like_active');

let openPopup = popup => {
  popup.classList.add('popup_open');
}

let closePopup = popup => {
  popup.classList.remove('popup_open');
}

let handleProfileSubmit = event => {
  event.preventDefault();
  profileName.textContent = popupInputName.value;
  profileInterests.textContent = popupInputInterest.value;
  closePopup(popupProfile);
}

let handleCardSubmit = event => {
  event.preventDefault();
  addNewCard();
  closePopup(popupCard);
}

profileButtonEdit.addEventListener('click', () => {
  popupInputName.value = profileName.textContent;
  popupInputInterest.value = profileInterests.textContent;
  openPopup(popupProfile);
})

profileButtonAdd.addEventListener('click', () => {
  openPopup(popupCard);
});

profileButtonClose.addEventListener('click', () => {
  closePopup(popupProfile);
})

cardButtonClose.addEventListener('click', () => {
  closePopup(popupCard);
})

formProfile.addEventListener('submit', handleProfileSubmit);

formCard.addEventListener('submit', handleCardSubmit);













const profileButtonEdit = document.querySelector('.profile__btn-edit');
const popupButtonClose= document.querySelector('.popup__icon-close');
const popupNode = document.querySelector('.popup');

profileButtonEdit.addEventListener('click', handleProfileButtonClick);
popupButtonClose.addEventListener('click', handlePopupButtonCloseClick);

function handleProfileButtonClick() {
  popupNode.classList.add('popup_open');
}

function handlePopupButtonCloseClick() {
  popupNode.classList.remove('popup_open');
}


const showError = (form, input) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = input.validationMessage;
  input.classList.add('popup__input_type_error');
};

const hideError = (form, input) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove('popup__input_type_error');
};

const clearErrorForm = form => {
  const errorList = form.querySelectorAll('.popup__input-error');
  const inputList = form.querySelectorAll('.popup__input');
  errorList.forEach(error => {
    error.textContent = '';
  })
  inputList.forEach(input => {
    input.classList.remove('popup__input_type_error');
  })
};

const checkInputValidity = (form, input) => {
  if(!input.validity.valid) {
    showError(form, input);
  } else {
    hideError(form, input);
  }
};

const setButtonState = (button, status) => {
  if(!status) {
    button.classList.add('popup__submit_invalid');
    button.disabled = true;
  } else {
    button.classList.remove('popup__submit_invalid');
    button.disabled = false;
  }
};

const setEventListener = form => {
  const inputList = form.querySelectorAll('.popup__input');
  const submitButton = form.querySelector('.popup__submit');

  inputList.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input);
      setButtonState(submitButton, form.checkValidity());
    })
  });
};

const enableValidation = () => {
  const forms = document.querySelectorAll('.popup__form');

  forms.forEach(form => {
    setEventListener(form)

    form.addEventListener('submit', e => {
      e.preventDefault();
    })
    const submitButton = form.querySelector('.popup__submit');
    setButtonState(submitButton, form.checkValidity());

  })
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  buttonInvalidClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error',

  errorClass: 'popup__error_visible'
};

enableValidation();

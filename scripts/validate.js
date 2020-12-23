const showError = (form, input, config) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = input.validationMessage;
  input.classList.add(config.inputErrorClass);
};

const hideError = (form, input, config) => {
  const inputError = form.querySelector(`#${input.id}-error`);
  inputError.textContent = '';
  input.classList.remove(config.inputErrorClass);
};

const checkInputValidity = (form, input, config) => {
  if(!input.validity.valid) {
    showError(form, input, config);
  } else {
    hideError(form, input, config);
  }
};

const setButtonState = (button, status, config) => {
  if(!status) {
    button.classList.add(config.buttonInvalidClass);
    button.disabled = true;
  } else {
    button.classList.remove(config.buttonInvalidClass);
    button.disabled = false;
  }
};

const setEventListener = (form, config) => {
  const inputList = form.querySelectorAll(config.inputSelector);
  const submitButton = form.querySelector(config.submitButtonSelector);

  inputList.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(form, input, config);
      setButtonState(submitButton, form.checkValidity(), config);
    })
  });
};

const enableValidation = (config) => {
  const forms = document.querySelectorAll(config.formSelector);

  forms.forEach(form => {
    setEventListener(form, config);

    form.addEventListener('submit', e => {
      e.preventDefault();
    });
    const submitButton = form.querySelector(config.submitButtonSelector);
    setButtonState(submitButton, form.checkValidity(), config);
  });
};

const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  buttonInvalidClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error',
};

enableValidation(validationConfig);

export class FormValidator {

  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
  }

  _showError(form, input) {
    const inputError = form.querySelector(`#${input.id}-error`);
    inputError.textContent = input.validationMessage;
    input.classList.add(this._config.inputErrorClass);
  };

  _hideError(form, input) {
    const inputError = form.querySelector(`#${input.id}-error`);
    inputError.textContent = '';
    input.classList.remove(this._config.inputErrorClass);
  };

  clearErrorsForm(form) {
    const listMessageErrors = form.querySelectorAll(this._config.inputErrorSelector);
    const listInputErrors = form.querySelectorAll(this._config.inputSelector);

    listMessageErrors.forEach(message => {
      message.textContent = '';
    });
    listInputErrors.forEach(input => {
      input.classList.remove(this._config.inputErrorClass);
    });
  };

  _checkInputValidity(form, input) {
    if(!input.validity.valid) {
      this._showError(form, input);
    } else {
      this._hideError(form, input);
    }
  };

  setButtonState(button, status) {
    if(!status) {
      button.classList.add(this._config.buttonInvalidClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._config.buttonInvalidClass);
      button.disabled = false;
    }
  };

  _setEventListener(form) {
    const inputList = form.querySelectorAll(this._config.inputSelector);
    const submitButton = form.querySelector(this._config.submitButtonSelector);

    inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(form, input);
        this.setButtonState(submitButton, form.checkValidity());
      })
    });
  };

  enableValidation() {
    const form = document.querySelector(this._formSelector);
      this._setEventListener(form);

      form.addEventListener('submit', e => {
        e.preventDefault();
      });
      const submitButton = form.querySelector(this._config.submitButtonSelector);
      this.setButtonState(submitButton, form.checkValidity());

  };
}

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorSelector: '.popup__input-error',
  buttonInvalidClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error'
};


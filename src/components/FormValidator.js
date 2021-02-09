export class FormValidator {

  constructor(config, formSelector) {
    this._formSelector = formSelector;
    this._form = document.querySelector(this._formSelector);

    this._inputErrorClass = config.inputErrorClass;
    this._buttonInvalidClass = config.buttonInvalidClass;

    this._inputErrorSelector = config.inputErrorSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;

    this._messageList = this._form.querySelectorAll(this._inputErrorSelector);
    this._inputList = this._form.querySelectorAll(this._inputSelector);
    this._submitButton = this._form.querySelector(this._submitButtonSelector);

  }

  _showError(input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    inputError.textContent = input.validationMessage;
    input.classList.add(this._inputErrorClass);
  };

  _hideError(input) {
    const inputError = this._form.querySelector(`#${input.id}-error`);
    inputError.textContent = '';
    input.classList.remove(this._inputErrorClass);
  };

  clearErrorsForm() {
    this._messageList.forEach(message => {
      message.textContent = '';
    });
    this._inputList.forEach(input => {
      input.classList.remove(this._inputErrorClass);
    });
  };

  _checkInputValidity(input) {
    if(!input.validity.valid) {
      this._showError(input);
    } else {
      this._hideError(input);
    }
  };

  enableSubmitButton() {
    this._submitButton.classList.remove(this._buttonInvalidClass);
    this._submitButton.disabled = false;
  };

  disableSubmitButton() {
    this._submitButton.classList.add(this._buttonInvalidClass);
    this._submitButton.disabled = true;
  };

  _setButtonState(status) {
    if(!status) {
      this.disableSubmitButton();

    } else {
      this.enableSubmitButton();
    }
  };

  _setEventListeners() {
    this._inputList.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity(input);
        this._setButtonState(this._form.checkValidity());
      })
    });
  };

  enableValidation() {
      this._setEventListeners();
      this._form.addEventListener('submit', e => {
        e.preventDefault();
      });
      this._setButtonState(this._form.checkValidity());

  };
}

export const validationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit',
  inputErrorSelector: '.popup__input-error',
  buttonInvalidClass: 'popup__submit_invalid',
  inputErrorClass: 'popup__input_type_error'
};


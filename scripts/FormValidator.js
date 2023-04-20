export default class FormValidator {
  constructor (object, formElement){
    this._formSelector = object.formSelector;
    this._inputSelector = object.inputSelector;
    this._submitButtonSelector = object.submitButtonSelector;
    this._inactiveButtonClass = object.inactiveButtonClass;
    this._inputErrorClass = object.inputErrorClass;
    this._errorClass = object.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
  };

  // Метод _showInputError отображает сообщение об ошибке для поля ввода.
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  };

  // Метод _hideInputError скрывает сообщение об ошибке для поля ввода.
  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(`.${inputElement.name}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };

  // Метод _checkInputValidity проверяет валидность поля ввода и отображает или скрывает сообщение об ошибке.
  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Метод _hasInvalidInput проверяет, есть ли в форме невалидные поля ввода.
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
        return !inputElement.validity.valid
    });
  };

  // Метод _toggleButtonState изменяет состояние кнопки отправки формы в зависимости от валидности полей ввода.
  _toggleButtonState = () => {
    if (this._hasInvalidInput()) {
      this.disableSubmitButton();
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  };

  // Метод disableSubmitButton делает кнопку отправки формы неактивной.
  disableSubmitButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  }

  // Метод resetErrors скрывает все сообщения об ошибках для полей ввода.
  resetErrors = () => {
    this._inputList.forEach((inputElement) => this._hideInputError(inputElement));
  }

  // Метод _setEventListeners устанавливает обработчики событий для полей ввода формы.
  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState()
      });
    });
  };

  // Метод enableValidation включает валидацию формы.
  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };
};

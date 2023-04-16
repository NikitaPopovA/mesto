// Класс "FormValidator" настройки валидации и элементы формы.
export class FormValidator {
  constructor(object, formElement) {
   this._formElement = formElement;
   this._inputSelector = object.inputSelector;
   this._submitButtonSelector = object.submitButtonSelector;
   this._inactiveButtonClass = object.inactiveButtonClass;
   this._inputErrorClass = object.inputErrorClass;
   this._errorClass = object.errorClass;
  }

  // Метод "_showInputError" показывает сообщение об ошибке для указанного элемента ввода.
  _showInputError (inputElement, errorMessage){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  // Метод "_hideInputError"  скрывает сообщение об ошибке для указанного элемента ввода.
  _hideInputError (inputElement){
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  // Метод "_isValid" проверяет, является ли указанный элемент ввода действительным.
  _isValid (inputElement){
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, this._obj);
    } else {
      this._hideInputError(inputElement, this._obj);
    }
  }

  // Метод "_hasInvalidInput" проверяет, есть ли на странице хотя бы один невалидный элемент ввода.
  _hasInvalidInput(inputElement){
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  // Метод "_toggleButtonState" добавляет или удаляет классы стилей для кнопки отправки формы.
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._inactiveButtonClass);
      this._buttonElement.setAttribute('disabled', true);
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass);
      this._buttonElement.removeAttribute('disabled', true);
    }
  };

  // Метод "_setEventListeners" назначает обработчики событий для каждого элемента ввода на странице,
  // которые проверяют его валидность и обновляют состояние кнопки отправки формы.
  _setEventListeners(){
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      this._hideInputError (inputElement)
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement)
        this._toggleButtonState();
      });
    });
  }

  // Метод "enableValidation" добавляет обработчик события для отправки формы и
  // назначает обработчики событий для каждого элемента ввода на странице.
  enableValidation(){
    this._formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
    });
    this._setEventListeners(this._formElement);
  }
}

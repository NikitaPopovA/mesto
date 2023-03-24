export const inactiveButtonClass = "popup__save-btn_disabled";
export const inputErrorClass = "popup__input_type-error";
export const errorClass = "popup__error_visible";

/* --------------------- Переменные --------------------------------------------------------*/

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save-btn",
  inactiveButtonClass: "popup__save-btn_disabled",
  inputErrorClass: "popup__input_type-error",
  errorClass: "popup__error_visible",
});

/* --------------------- Функции --------------------------------------------------------*/

// Функция проверяет валидность входных полей формы и изменяет кнопки сохранения.
export function toggleButtonState(inputs, submitButton, inactiveButtonClass) {
  const hasInvalidInput = inputs.some((input) => !input.validity.valid);
  submitButton.classList.toggle(inactiveButtonClass, hasInvalidInput);
  submitButton.disabled = hasInvalidInput;
}

// Функция добавляет сообщение об ошибке, если валидность не проходит, отображает соответсвующее сообщение.
function showInputError(formElement, inputElement, errorMessage, inputErrorClass, errorClass) {
  const { id } = inputElement;
  formElement.querySelector(`#${id}-error`).textContent = errorMessage;
  inputElement.classList.add(inputErrorClass);
  formElement.querySelector(`#${id}-error`).classList.add(errorClass);
}

// Функция удаляет сообщение об ошибке и скрывает соответствующее сообщение.
function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
  const { id } = inputElement;
  formElement.querySelector(`#${id}-error`).textContent = "";
  inputElement.classList.remove(inputErrorClass);
  formElement.querySelector(`#${id}-error`).classList.remove(errorClass);
}

// Функция проверяет валидность входного поля формы, может показывать или скрывать сообщение об ошибке.
function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
  } else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

// Функция "resetValidation" сбрасывает состояние валидации формы. Очищает сообщения об ошибках и удаляет классы ошибок.
// а также переключает состояние кнопки в неактивное.
export function resetValidation(formElement, inputSelector, inputErrorClass, errorClass) {
  Array.from(formElement.querySelectorAll(inputSelector)).forEach((inputElement) => {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  });

  Array.from(formElement.querySelectorAll(`.${errorClass}`)).map((errorElement) => {
    errorElement.textContent = "";
    errorElement.classList.remove(errorClass);
  }).join('');

  toggleButtonState(Array.from(formElement.querySelectorAll(inputSelector)), formElement.querySelector(".popup__save-btn"), inactiveButtonClass);
}

// Функция устанавливает обработчик событий на ввод затем проверяет валидность и имзменяет состояние кнопки отправки формы.
function setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const submitButton = formElement.querySelector(submitButtonSelector);

  // Слушатель событий на "input" для каждого элемента в списке "inputList".
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, submitButton, inactiveButtonClass);
    });
  });

  toggleButtonState(inputList, submitButton, inactiveButtonClass);
}

//Функция добавляет обработчик событий на форму и ее элементы, препятствует отправку и вызвает другую функцию.
function enableValidation({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
}

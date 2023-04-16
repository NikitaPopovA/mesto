/* --------------------- Импорт --------------------------------------------------------*/
import elementCardMass from './constants.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';

/* --------------------- Переменные --------------------------------------------------------*/
// Обращаюсь к popup, edit-profile, add-card.
const popupNodes = document.querySelectorAll('.popup');
const profilePopup = document.querySelector('.popup_edit-profile');
const addCardPopup = document.querySelector('.popup_add-card');
// Обращаюсь к кнопке _edit-button и add-button.
const editProfileBtn = document.querySelector('.profile__edit-button');
const addCardBtn = document.querySelector('.profile__add-button');
// Кнопки закрытия
const popupCloseBtn = document.querySelectorAll('.popup__close-btn');
// Контейнер который будет добавлять карточки.
const cardsContainer = document.querySelector('.elements');
// Увеличение изображения.
const imagePopup = document.querySelector('.popup_magnification');
// Обращаюсь к классам профиля  title и subtitle.
const userName = document.querySelector('.profile__title');
const userOccupation = document.querySelector('.profile__subtitle');
// Ссылки на элементы формы "name" и "Job".
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#job');
// CCылка на форму редактирования профиля и добавления карточки.
const profileForm = document.querySelector('#form-edit-profile');
const cardForm = document.querySelector('#form-add-card');
// CCылки на поле ввода имени и ссылка на изображения.
const inputNameValue = document.querySelector('#input-name');
const inputImageValue = document.querySelector('#input-image');

// Оъект содержащий селекторы и классы элементов формы.
const formElements = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_disabled',
  inputErrorClass: 'popup__input_type-error',
  errorClass: 'popup__error_visible'
};

/* --------------------- Функции --------------------------------------------------------*/

// Функция "openPopup" открывает всплывающее окно.
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKey);
}

// Функция "closePopup" закрывает всплывающее окно.
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKey);
}

// Функция "closePopupKey" обработчик событий при нажатии на кнопку "Escape" закрывает открытое всплывающее окно.
function closePopupKey(e) {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    if (popup) {
      closePopup(popup);
    }
  }
}

// Функция  "updateProfile" заполняет поля ввода в форме редактирования профиля значениями.
function updateProfile(){
  nameInput.value = userName.textContent;
  jobInput.value = userOccupation.textContent;
}

// Функция "setPopupImage" заполняет содержимое элементов всплывающего окна.
function setPopupImage(item){
  imagePopup.querySelector('.popup__magnification-imag').src = item.closest('.grid-card').querySelector('.grid-card__image').src;
  imagePopup.querySelector('.popup__magnification-title').textContent = item.closest('.grid-card').querySelector('.grid-card__title').textContent;
  imagePopup.querySelector('.popup__magnification-imag').alt = item.closest('.grid-card').querySelector('.grid-card__title').textContent;
}

// Функция "editProfileForm" отвечает за обновление информации о пользователе на странице.
function editProfileForm () {
  const nameValue = nameInput.value;
  const jobValue = jobInput.value;
  userName.textContent = nameValue;
  userOccupation.textContent = jobValue;
}

// Функция "addCardForm" добавляет новую карточку на страницу. Использует данные введенные пользователем в форму добавления карточки.
function addCardForm () {
  const cardProperties = {
    name: inputNameValue.value,
    link: inputImageValue.value
  }
  const card = new Card(cardProperties, '#card-template');
  const cardElement = card.render();
  cardElement.querySelector('.grid-card__image').addEventListener('click', (evt)=>{
    setPopupImage(evt.target);
    openPopup(imagePopup);
    closePopupKey(imagePopup);
  })
  cardsContainer.prepend(cardElement);
}

// Цикл "forEach" для создания карточек из массива "elementCardMass".
elementCardMass.forEach((item) => {
  const card = new Card(item, '#card-template');
  const cardElement = card.render();
  cardsContainer.append(cardElement);
});

// функция для обработки отправки формы редактирования профиля.
function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  editProfileForm();
  closePopup(profilePopup);
}

// функция для обработки клика по всплывающему окну.
function handlePopupClick(evt) {
  const closestPopup = evt.target.closest('.popup');
  if(evt.target == evt.currentTarget){
    closePopup(closestPopup);
  }
}

// функция для обработки клика по кнопке закрытия всплывающего окна.
function handlePopupCloseClick(evt) {
  const closestPopup = evt.target.closest('.popup');
  closePopup(closestPopup);
}

// создание объекта валидатора формы для формы профиля.
const profileFormValidator = new FormValidator(formElements, profileForm);
profileFormValidator.enableValidation();
// создание объекта валидатора формы для формы карточки.
const cardFormValidator = new FormValidator(formElements, cardForm);
cardFormValidator.enableValidation();

// добавление обработчика клика по кнопке редактирования профиля.
editProfileBtn.addEventListener('click', () => {
  updateProfile();
  openPopup(profilePopup);
  closePopupKey(profilePopup);
});

// добавление обработчика клика по кнопке добавления карточки.
addCardBtn.addEventListener('click', () => {
  cardForm.reset();
  openPopup(addCardPopup);
  closePopupKey(addCardPopup);
});

// функция для обработки отправки формы добавления карточки.
function handleAddCardSubmit(evt) {
  evt.preventDefault();
  addCardForm();
  closePopup(addCardPopup);
  cardForm.reset();
  cardFormValidator._toggleButtonState();
}

// функция для обработки клика по изображению карточки.
function handleCardImageClick(evt) {
  setPopupImage(evt.target);
  openPopup(imagePopup);
  closePopupKey(imagePopup);
}


profileForm.addEventListener('submit', handleEditProfileSubmit);
cardForm.addEventListener('submit', handleAddCardSubmit);

popupNodes.forEach(popup => {
  popup.addEventListener('click', handlePopupClick);
});

popupCloseBtn.forEach(closeButton => {
  closeButton.addEventListener('click', handlePopupCloseClick);
});

cardsContainer.addEventListener('click', evt => {
  if (evt.target.classList.contains('grid-card__image')) {
    handleCardImageClick(evt);
  }
});


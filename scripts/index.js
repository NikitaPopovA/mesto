/* --------------------- Импорт --------------------------------------------------------*/
import { elementCardMass } from "./constants.js";
import Card from "./Card.js";
import FormValidator from "./FormValidator.js";

/* --------------------- Переменные --------------------------------------------------------*/
// Обращаюсь к edit-profile, add-card.
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
const magnificationImg = imagePopup.querySelector('.popup__magnification-imag');
const magnificationTitle = imagePopup.querySelector('.popup__magnification-title');
// Обращаюсь к классам профиля  title и subtitle.
const userName = document.querySelector('.profile__title');
const userOccupation = document.querySelector('.profile__subtitle');
// Формы profile и card.
const profileForm = document.querySelector('.popup__form-profile');
const cardForm = document.querySelector('.popup__form-card');
// Инпуты profile и card.
const userNameInput = profilePopup.querySelector('.popup__input_user_name');
const occupationInput = profilePopup.querySelector ('.popup__input_user_occupation');
const cardImageInput = addCardPopup.querySelector('.popup__input_image_name');
const cardImageLinkInput = addCardPopup.querySelector('.popup__input_image_link');

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

// Объекты FormValidator для валидации формы профиля и формы добавления карточки на странице.
const profileFormValidator = new FormValidator(formElements, profilePopup);
profileFormValidator.enableValidation();
const cardFormValidator = new FormValidator(formElements, addCardPopup);
cardFormValidator.enableValidation();

// Функция "openPopup" открывает всплывающее окно.
function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupKey);
};

// Функция "closePopup" закрывает всплывающее окно.
function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupKey);
};

// Функция обрабатывает событие клика на странице и закрывает открытый всплывающий блок.
function closePopupClick (event) {
  const popupOpenedClass = document.querySelector('.popup_opened')
  if(event.target === popupOpenedClass) {
    closePopup(popupOpenedClass)
  }
};

// Функция "closePopupKey" обработчик событий при нажатии на кнопку "Escape" закрывает открытое всплывающее окно.
function closePopupKey (event) {
  if (event.key === 'Escape') {
    const popupOpenedClass = document.querySelector('.popup_opened')
    if(popupOpenedClass) {
      closePopup(popupOpenedClass)
    }
  }
};

// Функция обрабатывает отправку формы редактирования профиля на странице.
function handleEditFormSubmit (event) {
  event.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(profilePopup);
}

// Функция обрабатывает отправку формы добавления новой карточки на страницу.
function handleAddFormSubmit (event) {
  event.preventDefault();
  renderCard(cardImageInput.value,cardImageLinkInput.value, openMagnification);
  event.target.reset();
  cardFormValidator.disableSubmitButton();
  closePopup(addCardPopup);
}

// Функция открывает всплывающий блок с увеличенным изображением на странице.
function openMagnification(name, link) {
  openPopup(imagePopup);
  magnificationTitle.textContent = name;
  magnificationImg.src = link;
  magnificationImg.alt = name;
};

// Функция создает новую карточку на странице.
function renderCard(name, link, handleCardClick) {
  const newCard = new Card({name, link}, '#card-template', handleCardClick).generateCard();
  cardsContainer.prepend(newCard)
}
// Cоздает карточки на странице для каждого элемента в массиве elementCardMass и вызывает функцию renderCard() для каждого элемента.
elementCardMass.forEach(card => renderCard(card.name, card.link, openMagnification));

function handleEditProfileBtnClick() {
  openPopup(profilePopup);
  userNameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
  profileFormValidator.resetErrors();
}

function handleAddCardBtnClick() {
  openPopup(addCardPopup);
  cardForm.reset();
  cardFormValidator.resetErrors();
}

/* --------------------- Обработчики событий  --------------------------------------------------------*/

editProfileBtn.addEventListener('click', handleEditProfileBtnClick);
addCardBtn.addEventListener('click', handleAddCardBtnClick);

popupCloseBtn.forEach((button) => {
  button.addEventListener('click', () => {
    closePopup(button.closest('.popup'))
  });
});

profileForm.addEventListener('submit', handleEditFormSubmit);
cardForm.addEventListener('submit', handleAddFormSubmit);
document.addEventListener('mousedown', closePopupClick);

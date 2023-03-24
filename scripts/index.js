import { elementCardMass } from "./constants.js";
import { toggleButtonState, resetValidation, inactiveButtonClass, inputErrorClass, errorClass } from "./validate.js";

/* --------------------- Переменные --------------------------------------------------------*/

// Обращаюсь к popup, edit-profile, add-card.
const popupNodes = document.querySelectorAll(".popup");
const profilePopup = document.querySelector(".popup_edit-profile");
const addCardPopup = document.querySelector(".popup_add-card");
// Обращаюсь к кнопке _edit-button и add-button.
const editProfileBtn = document.querySelector(".profile__edit-button");
const addCardBtn = document.querySelector(".profile__add-button");
// Кнопки закрытия попапа.
const closeProfileBtn = profilePopup.querySelector(".popup__close-btn-edit");
const closeAddCardBtn = addCardPopup.querySelector(".popup__close-btn-add");
// Кнопка сохранить.
const saveButtonClass = ".popup__save-btn";
// Поиск формы для ввода.
const formProfile = profilePopup.querySelector(".popup__form-profile");
const formAddCard = document.querySelector(".popup__form-card");
// Обращаюсь к классам профиля  title и subtitle.
const userName = document.querySelector(".profile__title");
const userOccupation = document.querySelector(".profile__subtitle");
// Поиск ввода имени и профессии.
const userNameInput = profilePopup.querySelector(".popup__input_type_name");
const occupationInput = profilePopup.querySelector(".popup__input_type_job");
// Контейнер который будет добавлять карточки.
const cardsContainer = document.querySelector(".elements");
// Поле формы ввода названия карточки и ссылки на изображение.
const nameImage = formAddCard.querySelector(".popup__input_card_name");
const linkImage = formAddCard.querySelector(".popup__input_card_link");
// Обращаюсь к popup секции magnification - увеличение картинки.
const magnificationPopup = document.querySelector(".popup_magnification");
// Изображение которое будет.
const magnificationImg = document.querySelector(".popup__magnification-imag");
// Заголовок для изображения.
const magnificationTitle = document.querySelector(".popup__magnification-title");
// Кнопка закрытия попапа.
const closeMagnificationBtn = magnificationPopup.querySelector(".popup__close-btn-magnification");
// Ссылка на кнопку сохранения формы профиля.
const submitButtonProfile = profilePopup.querySelector(saveButtonClass);
// Ccылка на кнопку сохранинея формы добавления карточки.
const submitButtonCard = formAddCard.querySelector(saveButtonClass);
// id карточки
const cardTemplate = document.querySelector("#card-template");


/* --------------------- Функции --------------------------------------------------------*/

// Функция "openPopup" открывает всплывающее окно, добавляет класс, затем устанавливает обработчик событий на "Escape".
const openPopup = (popupElement) => {
  popupElement.classList.add("popup_opened");
  document.addEventListener("keydown", handleEscapeKey);
}
// Функция "closePopup" закрывает всплывающее окно, удаляет класс, затем удаляет обработчик событий на "Escape".
const closePopup = (popupElement) => {
  popupElement.classList.remove("popup_opened");
  document.removeEventListener("keydown", handleEscapeKey);
}
// Функция "handleEscapeKey" обработчик событий при нажатии на кнопку "Escape" закрывает открытое всплывающее окно.
const handleEscapeKey = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}
// Цикл с методом "forEach" вызывает для каждого элемента массива "popupNodes" и добавляет обработчик событий.
popupNodes.forEach((popup) => {
  popup.addEventListener("click", (event) => {
    if (event.target === popup) {
      popup.classList.remove("popup_opened");
    }
  });
});
// Функция "openProfilePopup" открывает всплывающее окно с профилем "profilePopup", сбрасывает состояние валидации формы,
// устанавливает значения поле ввода и обнавляет кнопки формы
const openProfilePopup = () => {resetValidation(profilePopup, ".popup__input", inputErrorClass, errorClass);
openPopup(profilePopup);
userNameInput.value = userName.textContent;
occupationInput.value = userOccupation.textContent;
toggleButtonState([userNameInput, occupationInput], submitButtonProfile, inactiveButtonClass);
}
// Функция которая обрабатывает отправку формы для редактирования профиля.
const submitFormProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(profilePopup);
}
// Функция создает карточку card на основе шаблона. Функция кланирует этот шаблон и настраивает его содержимое.
function createCard(card) {
  const cardElement = cardTemplate.content.cloneNode(true);
  const cardImage = cardElement.querySelector(".grid-card__image");
  const cardTitle = cardElement.querySelector(".grid-card__title");
  const likeBtn = cardElement.querySelector(".grid-card__like");
  const deleteBtn = cardElement.querySelector(".grid-card__btn-delete");

  cardImage.setAttribute("src", card.image);
  cardImage.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;
  // Обработчик событий на "likeBtn".
  likeBtn.addEventListener("click", function (evt) {
    evt.target.classList.toggle("grid-card__like_active");
  });
  // Обработчик событий на "deleteBtn".
  deleteBtn.addEventListener("click", function (evt) {
    evt.target.closest(".grid-card").remove();
  });
  // Обработчик событий на "click". Открывает высплывающее окно с увеличеной версией изображения.
  cardImage.addEventListener("click", function (evt) {
    const cardTitle = evt.target.closest(".grid-card").querySelector(".grid-card__title").textContent;
    const cardAlt = evt.target.getAttribute("alt");
    magnificationImg.setAttribute("src", evt.target.src);
    magnificationImg.setAttribute("alt", cardAlt);
    magnificationTitle.textContent = cardTitle;
    openPopup(magnificationPopup);
  });
  return cardElement;
}
// Функция для добавления карточки на страницу.
const renderCard = (card, cardsContainer) => cardsContainer.prepend(createCard(card));
elementCardMass.forEach((card) => cardsContainer.appendChild(createCard(card)));

// Функция обработчик событий отправки формы для добавления новой карточки на страницу.
const handleFormSubmitCard = (evt) => {
  evt.preventDefault();
  const titleValue = nameImage.value;
  const imageValue = linkImage.value;
  const newCard = {
    title: titleValue,
    image: imageValue,
    alt: titleValue,
  };
  renderCard(newCard, cardsContainer);
  closePopup(addCardPopup);
};

/* --------------------- Обработчики событий  --------------------------------------------------------*/

formAddCard.addEventListener("submit", handleFormSubmitCard);
closeMagnificationBtn.addEventListener("click", () => closePopup(magnificationPopup));
editProfileBtn.addEventListener("click", openProfilePopup);
closeProfileBtn.addEventListener("click", () => closePopup(profilePopup));
formProfile.addEventListener("submit", submitFormProfile);
addCardBtn.addEventListener("click", () => {formAddCard.reset(); resetValidation(addCardPopup, ".popup__input", inputErrorClass, errorClass); openPopup(addCardPopup);});
closeAddCardBtn.addEventListener("click", () => closePopup(addCardPopup));

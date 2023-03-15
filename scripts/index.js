/* --------------------- Переменные --------------------------------------------------------*/

// Обращаюсь к popup секции edit-profile и add-card
const profilePopup = document.querySelector('.popup_edit-profile');
const addCardPopup = document.querySelector('.popup_add-card');
// Обращаюсь к кнопке _edit-button и add-button
const editProfileBtn = document.querySelector(".profile__edit-button");
const addCardBtn = document.querySelector(".profile__add-button");
// Кнопки закрытия попапа
const closeProfileBtn = profilePopup.querySelector(".popup__close-btn-edit");
const closeAddCardBtn = addCardPopup.querySelector(".popup__close-btn-add");
// Поиск формы редактирования профиля
const formProfile = profilePopup.querySelector(".popup__form-profile");
// Обращаюсь к классам профиля  title и subtitle
const userName = document.querySelector(".profile__title");
const userOccupation = document.querySelector(".profile__subtitle");
// Поиск ввода имени и профессии
const userNameInput = profilePopup.querySelector(".popup__input_type_name");
const occupationInput = profilePopup.querySelector(".popup__input_type_job");
// Контейнер который будет добавлять карточки
const cardsContainer = document.querySelector(".elements");
// Форма добавления карточки
const formAddCard = document.querySelector(".popup__form-card");
// Поле формы ввода названия карточки
const nameImage = formAddCard.querySelector(".popup__input_card_name");
// Поле формы ввода ссылки на изображение
const linkImage = formAddCard.querySelector(".popup__input_card_link");
// Обращаюсь к popup секции magnification - увеличение картинки
const magnificationPopup = document.querySelector(".popup_magnification");
// Изображение которое будет
const magnificationImg = document.querySelector(".popup__magnification-imag");
// Заголовок для изображения
const magnificationTitle = document.querySelector(".popup__magnification-title");
// Кнопка закрытия попапа
const closeMagnificationBtn = magnificationPopup.querySelector(".popup__close-btn-magnification");



/* --------------------- Функции --------------------------------------------------------*/

// Две функции которые добавляют и удаляют popup_opened
const openPopup = (popupElement) => popupElement.classList.add("popup_opened");
const closePopup = (popupElement) => popupElement.classList.remove("popup_opened");

// Функция которая вызывает функцию openPopup , чтобы показать всплывающее окно, потом устанавливает значение полей в этом окне
const openProfilePopup = () => {
  openPopup(profilePopup);
  userNameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
};

// Функция которая обрабатывает отправку формы для редактирования профиля
const formSubmitProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(profilePopup);
};

// Функция создает карточку card на основе шаблона. Функция кланирует этот шаблон и настраивает его содержимое
const createCard = (card) => {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImg = cardTemplate.querySelector(".grid-card__image");
  const cardTitle = cardTemplate.querySelector(".grid-card__title");
  const likeBtn = cardTemplate.querySelector(".grid-card__like");
  const deleteBtn = cardTemplate.querySelector(".grid-card__btn-delete");

  cardImg.setAttribute("src", card.image);
  cardImg.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;

  likeBtn.addEventListener("click", () => likeBtn.classList.toggle("grid-card__like_active"));
  deleteBtn.addEventListener("click", () => deleteBtn.closest(".grid-card").remove());

  cardImg.addEventListener("click", () => {
  const title = cardTitle.textContent;
  const alt = cardImg.getAttribute("alt");
  magnificationImg.src = cardImg.getAttribute("src");
  magnificationImg.alt = alt;
  magnificationTitle.textContent = title;
  openPopup(magnificationPopup);
  });

  return cardTemplate;
};

// Функция для добавления карточки на страницу
const renderCard = (card, cardsContainer) => cardsContainer.prepend(createCard(card));
elementCardMass.forEach((card) => cardsContainer.appendChild(createCard(card)));

// Функция обработчик событий отправки формы для добавления новой карточки на страницу
const handleFormSubmitCard = (evt) => {
  evt.preventDefault();
  const newCard = {
    title: nameImage.value,
    image: linkImage.value,
    alt: nameImage.value,
  };
  renderCard(newCard, cardsContainer);
  formAddCard.reset();
  closePopup(addCardPopup);
};


/* --------------------- Обработчики событий  --------------------------------------------------------*/

editProfileBtn.addEventListener("click", () => openProfilePopup());
closeProfileBtn.addEventListener("click", () => closePopup(profilePopup));
formProfile.addEventListener("submit", formSubmitProfile);
addCardBtn.addEventListener("click", () => openPopup(addCardPopup));
closeAddCardBtn.addEventListener("click", () => closePopup(addCardPopup));
formAddCard.addEventListener("submit", handleFormSubmitCard);

cardsContainer.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.classList.contains("grid-card__image")) {
  const card = target.closest(".grid-card");
  const title = card.querySelector(".grid-card__title").textContent;
  const alt = target.getAttribute("alt");
  magnificationImg.src = target.getAttribute("src");
  magnificationImg.alt = alt;
  magnificationTitle.textContent = title;
  openPopup(magnificationPopup);
  }
});

closeMagnificationBtn.addEventListener("click", () => closePopup(magnificationPopup));
































/*
// Две функции которые добавляют и удаляют popup_opened
const openPopup = (popupElement) => popupElement.classList.add("popup_opened");
const closePopup = (popupElement) => popupElement.classList.remove("popup_opened");

// Функция которая вызывает функцию openPopup , чтобы показать всплывающее окно, потом устанавливает значение полей в этом окне
const openProfilePopup = () => {
  openPopup(profilePopup);
  userNameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
};
// Функция которая обрабатывает отправку формы для редактирования профиля
const formSubmitProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(profilePopup);
};
// Обработчики событий
editProfileBtn.addEventListener("click", () => openProfilePopup());
closeProfileBtn.addEventListener("click", () => closePopup(profilePopup));
formProfile.addEventListener("submit", formSubmitProfile);
addCardBtn.addEventListener("click", () => openPopup(addCardPopup));
closeAddCardBtn.addEventListener("click", () => closePopup(addCardPopup));

// Функция для создания карточки
const createCard = (card) => {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImg = cardTemplate.querySelector(".grid-card__image");
  const cardTitle = cardTemplate.querySelector(".grid-card__title");
  const likeBtn = cardTemplate.querySelector(".grid-card__like");
  const deleteBtn = cardTemplate.querySelector(".grid-card__btn-delete");

  cardImg.setAttribute("src", card.image);
  cardImg.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;

  // Добавляем обработчики событий на кнопки "лайк" и "удалить"
  likeBtn.addEventListener("click", () => likeBtn.classList.toggle("grid-card__like_active"));
  deleteBtn.addEventListener("click", () => deleteBtn.closest(".grid-card").remove());

  // Добавляем обработчик события на картинку для открытия модального окна с увеличенной картинкой
  cardImg.addEventListener("click", () => {
  const title = cardTitle.textContent;
  const alt = cardImg.getAttribute("alt");
  magnificationImg.src = cardImg.getAttribute("src");
  magnificationImg.alt = alt;
  magnificationTitle.textContent = title;
  openPopup(magnificationPopup);
  });

  return cardTemplate;
  };

// Функция для добавления карточки на страницу
const renderCard = (card, cardsContainer) => cardsContainer.prepend(createCard(card));
elementCardMass.forEach((card) => cardsContainer.appendChild(createCard(card)));


 // Функция для обработки отправки формы для добавления новой карточки на страницу
const handleFormSubmitCard = (evt) => {
  evt.preventDefault();
  const newCard = {
    title: nameImage.value,
    image: linkImage.value,
    alt: nameImage.value,
  };
  renderCard(newCard, cardsContainer);
  formAddCard.reset();
  closePopup(addCardPopup);
};


  formAddCard.addEventListener("submit", handleFormSubmitCard);

  // Добавляем обработчик событий на контейнер для обработки кликов на карточках
  cardsContainer.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.classList.contains("grid-card__image")) {
  const card = target.closest(".grid-card");
  const title = card.querySelector(".grid-card__title").textContent;
  const alt = target.getAttribute("alt");
  magnificationImg.src = target.getAttribute("src");
  magnificationImg.alt = alt;
  magnificationTitle.textContent = title;
  openPopup(magnificationPopup);
  }
  });

  // Добавляем обработчик события на кнопку закрытия модального окна с увеличенной картинкой
  closeMagnificationBtn.addEventListener("click", () => closePopup(magnificationPopup)); */

































/*
// Две функции которые добавляют и удаляют popup_opened
const openPopup = (popupElement) => popupElement.classList.add("popup_opened");
const closePopup = (popupElement) => popupElement.classList.remove("popup_opened");

// Функция которая вызывает функцию openPopup , чтобы показать всплывающее окно, потом устанавливает значение полей в этом окне
const openProfilePopup = () => {
  openPopup(profilePopup);
  userNameInput.value = userName.textContent;
  occupationInput.value = userOccupation.textContent;
};
// Функция которая обрабатывает отправку формы для редактирования профиля
const formSubmitProfile = (evt) => {
  evt.preventDefault();
  userName.textContent = userNameInput.value;
  userOccupation.textContent = occupationInput.value;
  closePopup(profilePopup);
};
// Обработчики событий
editProfileBtn.addEventListener("click", () => openProfilePopup());
closeProfileBtn.addEventListener("click", () => closePopup(profilePopup));
formProfile.addEventListener("submit", formSubmitProfile);
addCardBtn.addEventListener("click", () => openPopup(addCardPopup));
closeAddCardBtn.addEventListener("click", () => closePopup(addCardPopup));

const createCard = (card) => {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImg = cardTemplate.querySelector(".grid-card__image");
  const cardTitle = cardTemplate.querySelector(".grid-card__title");
  const likeButton = cardTemplate.querySelector(".grid-card__like");
  const deleteButton = cardTemplate.querySelector(".grid-card__btn-delete");

  cardImg.setAttribute("src", card.image);
  cardImg.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("grid-card__like_active");
  });

  deleteButton.addEventListener("click", () => {
    deleteButton.closest(".grid-card").remove();
  });

  cardImg.addEventListener("click", () => {
    magnificationImg.src = card.image;
    magnificationImg.alt = card.alt;
    magnificationTitle.textContent = card.title;
    openPopup(magnificationPopup);
  });

  return cardTemplate;
};

const renderCard = (card, cardsContainer) => cardsContainer.appendChild(createCard(card));

elementCardMass.forEach((card) => renderCard(card, cardsContainer));


const handleFormSubmitCard = (evt) => {
  evt.preventDefault();
  const newCard = {
    title: nameImage.value,
    image: linkImage.value,
    alt: nameImage.value,
  };
  renderCard(newCard, cardsContainer);
  formAddCard.reset();
  closePopup(addCardPopup);
};

formAddCard.addEventListener("submit", handleFormSubmitCard);

closeMagnificationBtn.addEventListener("click", () => closePopup(magnificationPopup));

*/

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
// Массив объектов карточек
const ElementCardMass = [
  {
    title: "Moscow, Russia",
    image: "https://images.unsplash.com/photo-1580033813221-dbe4d224e1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80",
      alt: "Moscow, Russia",
  },
  {
    title: "Tokyo, Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80",
      alt: "Tokyo, Japan",
  },
  {
    title: "Toronto, Canada",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
      alt: "Toronto, Canada",
  },
  {
    title: "New York, USA",
    image: "https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "New York, USA",
  },
  {
    title: "Paris, France",
    image: "https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Paris, France",
  },
  {
    title: "Alesund, Norway",
    image: "https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      alt: "Alesund, Norway",
  },

];
// Контейнер который будет добавлять карточки
const cardsContainer = document.querySelector(".elements");
// Форма добавления карточки
const formAddCard = document.querySelector(".popup__form-card");
// Поле формы ввода названия карточки
const nameImage = formAddCard.querySelector(".popup__card_name");
// Поле формы ввода ссылки на изображение
const linkImage = formAddCard.querySelector(".popup__card_link");
// Обращаюсь к popup секции magnification - увеличение картинки
const magnificationPopup = document.querySelector(".popup_magnification");
// Изображение которое будет
const magnificationImg = document.querySelector(".popup__magnification-imag");
// Заголовок для изображения
const magnificationTitle = document.querySelector(".popup__magnification-title");
// Кнопка закрытия попапа
const closeMagnificationBtn = magnificationPopup.querySelector(".popup__close-btn-magnification");


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

// Функция создает карточку card на основе шаблона. Функция кланирует этот шаблон и настраивает его содержимое
const createCard = (card) => {
  const cardTemplate = document.querySelector("#card-template").content.cloneNode(true);
  const cardImg = cardTemplate.querySelector(".grid-card__image");
  const cardTitle = cardTemplate.querySelector(".grid-card__title");
  cardImg.setAttribute("src", card.image);
  cardImg.setAttribute("alt", card.alt);
  cardTitle.textContent = card.title;
  return cardTemplate;
};

// Функции относятся к отрисовке карточек на стронице
const renderCard = (card, cardsContainer) => cardsContainer.prepend(createCard(card));
ElementCardMass.forEach((card) => cardsContainer.appendChild(createCard(card)));

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

formAddCard.addEventListener("submit", handleFormSubmitCard);

// Добавляем обработчик событий на контейнер который отвечает за обработку кликов
cardsContainer.addEventListener("click", (evt) => {
  const target = evt.target;

  if (target.classList.contains("grid-card__like")) {
    target.classList.toggle("grid-card__like_active");
  }
  else if (target.classList.contains("grid-card__btn-delete")) {
    target.closest(".grid-card").remove();
  }
  else if (target.classList.contains("grid-card__image")) {
    const card = target.closest(".grid-card");
    const title = card.querySelector(".grid-card__title").textContent;
    const alt = target.getAttribute("alt");
    magnificationImg.src = target.src;
    magnificationImg.alt = alt;
    magnificationTitle.textContent = title;
    openPopup(magnificationPopup);
  }
});

closeMagnificationBtn.addEventListener("click", () => closePopup(magnificationPopup));

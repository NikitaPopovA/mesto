// Обращаюсь к edit-profile, add-card. popups.
export const popups = Array.from(document.querySelectorAll('.popup'));
export const profilePopup = document.querySelector('.popup_edit-profile');
export const addCardPopup = document.querySelector('.popup_add-card');
// Обращаюсь к кнопке edit-button и add-button.
export const editProfileBtn = document.querySelector('.profile__edit-button');
export const addCardBtn = document.querySelector('.profile__add-button');
// Обращаюсь к аватару.
export const selectAvatarBtn = document.querySelector('.profile__filter');
export const avatarImage = document.querySelector('.profile__avatar-image');
// Контейнер который будет добавлять карточки.
export const cardsContainer = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_magnification');
// Увеличение изображения.
export const magnificationTitle = document.querySelector('.popup__magnification-title');
export const magnificationImg = document.querySelector('.popup__magnification-imag');
// Обращаюсь к классам профиля  title и subtitle.
export const userName = document.querySelector('.profile__title');
export const userOccupation = document.querySelector('.profile__subtitle');
// Формы profile, card, avatar.
export const profileForm = document.querySelector('.popup__form-profile');
export const cardForm = document.querySelector('.popup__form-card');
export const avatarForm = document.querySelector('.popup__avatar-form');
// Инпуты profile и card.
export const popupNameInput = document.querySelector('.popup__profile-name');
export const popupJobInput = document.querySelector('.popup__profile-job');
export const popupCardNameInput = document.querySelector('.popup__card-name');
export const popupCardLinkInput = document.querySelector('.popup__card-link');
// Обращаюсь к удалению карточки.
export const popupDeleteCards = document.querySelector('.popup_delete-cards');
// Обращаюсь к обнавленю аватарки.
export const popupSwapAvatar = document.querySelector('.popup_swap-avatar');
export const config = {
    formSelector: '.popup__form',
    inactiveButtonClass: 'popup__save-btn_disabled',
    inputErrorClass: 'popup__input_type_error',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-btn'
  };



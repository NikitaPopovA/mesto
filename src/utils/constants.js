// Обращаюсь к edit-profile, add-card. popups.
export const popups = Array.from(document.querySelectorAll('.popup'));
export const profilePopup = document.querySelector('.popup_edit-profile');
export const addCardPopup = document.querySelector('.popup_add-card');
// Обращаюсь к кнопке edit-button и add-button.
export const editProfileBtn = document.querySelector('.profile__edit-button');
export const addCardBtn = document.querySelector('.profile__add-button');
// Контейнер который будет добавлять карточки.
export const cardsContainer = document.querySelector('.elements');
export const imagePopup = document.querySelector('.popup_magnification');
// Увеличение изображения.
export const magnificationTitle = document.querySelector('.popup__magnification-title');
export const magnificationImg = document.querySelector('.popup__magnification-imag');
// Обращаюсь к классам профиля  title и subtitle.
export const userName = document.querySelector('.profile__title');
export const userOccupation = document.querySelector('.profile__subtitle');
// Формы profile и card.
export const profileForm = document.querySelector('.popup__form-profile');
export const cardForm = document.querySelector('.popup__form-card');
// Инпуты profile и card.
export const popupNameInput = document.querySelector('.popup__profile-name');
export const popupJobInput = document.querySelector('.popup__profile-job');
export const popupCardNameInput = document.querySelector('.popup__card-name');
export const popupCardLinkInput = document.querySelector('.popup__card-link');

// Массив карточек.
export const elementCardMass = [
  {
    name: 'Moscow, Russia',
    link: 'https://images.unsplash.com/photo-1580033813221-dbe4d224e1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1333&q=80'
  },
  {
    name: 'Tokyo, Japan',
    link: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1494&q=80'
  },
  {
    name: 'Ghent, Belgium',
    link: 'https://images.unsplash.com/photo-1585927207003-d7230e0834a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1149&q=80'
  },
  {
    name: 'New York, USA',
    link: 'https://images.unsplash.com/photo-1558369178-6556d97855d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Paris, France',
    link: 'https://images.unsplash.com/photo-1549144511-f099e773c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  },
  {
    name: 'Alesund, Norway',
    link: 'https://images.unsplash.com/photo-1475066392170-59d55d96fe51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];



import {
  cardsContainer,
  profilePopup,
  addCardPopup,
  imagePopup,
  popupDeleteCards,
  popupSwapAvatar,
  editProfileBtn,
  addCardBtn,
  selectAvatarBtn,
  userName,
  userOccupation,
  avatarImage,
  popupNameInput,
  popupJobInput,
  profileForm,
  cardForm,
  avatarForm,
  config,
} from '../utils/constants.js'

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { FormValidator } from '../components/FormValidator.js'
import { Api } from '../components/Api.js'
import './index.css'

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: '045de92b-0631-4ed3-8099-55e6284a0a86',
    'Content-Type': 'application/json'
  }
});

let userId;
const cards = new Section({
  items: [],
  renderer: (card) => {
    cards.addItem(createCard({
      name: card.name,
      link: card.link,
      likes: card.likes,
      owner: card.owner,
      cardId: card._id
    }));
  }
}, cardsContainer);

Promise.all([api.getProfile(), api.getCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo({
      userName: userData.name,
      userOccupation: userData.about,
    });
    userInfo.setUserAvatar(userData);
    userId = userData._id;
    cards.renderer(cardsData);
  })
  .catch(err => console.log(`Ошибка.....: ${err}`));

const imagePixelData = new PopupWithImage(imagePopup);
const formEditPopup = new PopupWithForm({
  popup: profilePopup,
  handleSubmitForm: (formData) => {

    formEditPopup.changeButtonText('Сохранение...');
    api.editProfile({
      name: formData.userName,
      job: formData.userOccupation,
    })
      .then((res) => {
        userInfo.setUserInfo(formData);
        userInfo.setUserAvatar(res);
        formEditPopup.close();
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => { formEditPopup.changeButtonText('Сохранить') });
  }
});

const formAddPopup = new PopupWithForm({
  popup: addCardPopup,
  handleSubmitForm: (formData) => {
    formAddPopup.changeButtonText('Сохранение...');
    api.addCard({
      name: formData.name,
      link: formData.link,
    })
      .then((res) => {
        cards.addNewItem(createCard({
          name: res.name,
          link: res.link,
          likes: res.likes,
          owner: res.owner,
          cardId: res._id
        }));
        formAddPopup.close();
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => { formAddPopup.changeButtonText('Создать') });
  }
});

const avatarUpdatePopupForm = new PopupWithForm({
  popup: popupSwapAvatar,
  handleSubmitForm: (formData) => {
    avatarUpdatePopupForm.changeButtonText('Сохранение...');
    api.changeAvatar(formData.swapLink)
      .then((res) => {
        userInfo.setUserAvatar(res);
        avatarUpdatePopupForm.close();
      })
      .catch(err => console.log(`Ошибка.....: ${err}`))
      .finally(() => { avatarUpdatePopupForm.changeButtonText('Сохранить') });
  }
});

const popupСonfirmDelete = new PopupWithForm({
  popup: popupDeleteCards
});

const userInfo = new UserInfo(userName, userOccupation, avatarImage);

imagePixelData.setEventListeners();
formEditPopup.setEventListeners();
formAddPopup.setEventListeners();
popupСonfirmDelete.setEventListeners();
avatarUpdatePopupForm.setEventListeners();

function createCard(item) {
  const card = new Card({
    data: item,
    templateSelector: '.card-template',
    userId,
    handleCardClick: () => {
      imagePixelData.open(item);
    },
    handleDeleteCard: (cardId) => {
      popupСonfirmDelete.open();
      popupСonfirmDelete.changeHandleSubmitForm(() => {
        popupСonfirmDelete.changeButtonText('Удаление...');
        api.deleteCard(cardId)
          .then(() => {
            card.deleteCard();
            popupСonfirmDelete.close();
          })
          .catch(err => console.log(`Ошибка.....: ${err}`))
          .finally(() => { popupСonfirmDelete.changeButtonText('Да') });
      });
    },
    hundleLikeClick: (cardId) => {
      if (card.isLiked()) {
        api.deleteLike(cardId)
          .then((res) => card.setLikes(res.likes))
          .catch(err => console.log(`Ошибка.....: ${err}`));
      } else {
        api.addLike(cardId)
          .then((res) => card.setLikes(res.likes))
          .catch(err => console.log(`Ошибка.....: ${err}`));
      }
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
}

editProfileBtn.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo();
  formEditPopup.open();
  popupNameInput.value = name;
  popupJobInput.value = job;
});

addCardBtn.addEventListener('click', () => {
  addCardValidator.resetErrors();
  formAddPopup.open();
});

selectAvatarBtn.addEventListener('click', () => {
  avatarUpdatePopupForm.open();
});

const editProfileValidator = new FormValidator(config, profileForm);
const addCardValidator = new FormValidator(config, cardForm);
const changeAvatarValidator = new FormValidator(config, avatarForm);

editProfileValidator.enableValidation();
addCardValidator.enableValidation();
changeAvatarValidator.enableValidation();

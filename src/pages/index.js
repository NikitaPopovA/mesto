import {
  profilePopup,
  addCardPopup,
  editProfileBtn,
  addCardBtn,
  cardsContainer,
  imagePopup,
  userName,
  userOccupation,
  popupNameInput,
  popupJobInput,
  elementCardMass
} from '../utils/constants.js';

import { Card } from '../components/Card.js'
import { Section } from '../components/Section.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import { UserInfo } from '../components/UserInfo.js'
import { FormValidator, config } from '../components/FormValidator.js'
import './index.css'

const imagePixelData = new PopupWithImage(imagePopup)

const formEditPopup = new PopupWithForm({
  popup: profilePopup,
  handleSubmitForm: (formData) => {
    userInfo.setUserInfo(formData)
  }
})

const formAddPopup = new PopupWithForm({
  popup: addCardPopup,
  handleSubmitForm: (formData) => {
    cards.addItem(createCard(formData));
  }
})

const userInfo = new UserInfo(userName, userOccupation)

imagePixelData.setEventListeners()
formEditPopup.setEventListeners()
formAddPopup.setEventListeners()

function createCard(item) {
  const card = new Card({
    data: item,
    templateSelector: '.card-template',
    handleCardClick: () => {
      imagePixelData.open(item)
    }
  });
  const cardElement = card.generateCard()
  return cardElement
}

const cards = new Section({
  items: elementCardMass,
  renderer: (item) => {
    cards.addItem(createCard(item));
  }
}, cardsContainer)

cards.renderer();


editProfileBtn.addEventListener('click', () => {
  const { name, job } = userInfo.getUserInfo()
  formEditPopup.open()
  popupNameInput.value = name
  popupJobInput.value = job
});

addCardBtn.addEventListener('click', () => {
  formAddPopup.open()
});

const formValidators = {}
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

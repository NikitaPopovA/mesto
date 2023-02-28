document.addEventListener('DOMContentLoaded', function() {
  const personProfile = document.querySelector('.profile');
  const editBtn = document.querySelector('.profile__edit-button');
  const popupContainer = document.querySelector('.popup');
  const closeBtn = popupContainer.querySelector('.popup__close-btn');
  const popupForm = document.querySelector('.popup__form');
  const nameInputField = popupForm.querySelector('.popup__input_type_name');
  const jobInputField = popupForm.querySelector('.popup__input_type_job');
  const profileTitle = personProfile.querySelector('.profile__title');
  const profileSubtitle = personProfile.querySelector('.profile__subtitle');

  function openPopup() {
    popupContainer.classList.add('popup_opened');
    nameInputField.value = profileTitle.textContent;
    jobInputField.value = profileSubtitle.textContent;
  }

  function closePopup() {
    popupContainer.classList.remove('popup_opened');
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = nameInputField.value;
    profileSubtitle.textContent = jobInputField.value;
    closePopup();
  }

  editBtn.addEventListener('click', openPopup);
  closeBtn.addEventListener('click', closePopup);
  popupForm.addEventListener('submit', handleFormSubmit);
});



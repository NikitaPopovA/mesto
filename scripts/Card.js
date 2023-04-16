// Класс "Card" для создания карточек с изображением и текстовым описанием.
export class Card {
  constructor(data, cardSelector){
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  // Метод "_getTemplate" для получения шаблока карточки и его клонирование.
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .cloneNode(true);
    return cardElement;
  }

  // Метод "_handleLikeClick" и "_handleDeleteClick" используются для обработки по кнопкам "лайк" и "удалить" .
  _handleLikeClick(likeButton) {
    likeButton.classList.toggle('grid-card__like_active');
  }
  _handleDeleteClick(trashButton) {
    trashButton.parentElement.remove()
  }

  _handleCardClick() {
    setPopupImage(this._element.querySelector('.grid-card__image'));
    openPopup(imagePopup);
    closePopupKey(imagePopup);
  }

  // Метод "_setEventListeners" устанавливает слушатель событий на кнопку "лайк" и "удалить".
  _setEventListeners() {
    this._element.querySelector('.grid-card__like').addEventListener('click', (evt) => {
      this._handleLikeClick(evt.target);
    });
    this._element.querySelector('.grid-card__btn-delete').addEventListener('click', (evt) => {
      this._handleDeleteClick(evt.target);
    });
  }

  // Метод "render" создает дом элемент карточки, заполяет его данными из объекта "data" и устанавливает слушатель на кнопки.
  render() {
    this._element = this._getTemplate();
    this._element.querySelector('.grid-card__image').src = this._image;
    this._element.querySelector('.grid-card__image').alt = this._title;
    this._element.querySelector('.grid-card__title').textContent = this._title;
    this._setEventListeners();
    return this._element;
  }
}



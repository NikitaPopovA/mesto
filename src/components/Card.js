export class Card {
  constructor({ data, templateSelector, handleCardClick }) {
    this._cardSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this.handleCardClick = handleCardClick;
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.grid-card__image')
    this._title = this._card.querySelector('.grid-card__title')
    this._like = this._card.querySelector('.grid-card__like')
    this._trash = this._card.querySelector('.grid-card__btn-delete') 
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.grid-card')
      .cloneNode(true)
    return cardElement
  }

  _toggleLike(event) {
    event.target.classList.toggle('grid-card__like_active');
  }

  _deleteCard() {
    this._card.remove();
    this._card = null;
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this._setEventListeners()
    return this._card;
  }

  _setEventListeners() {
    this._like.addEventListener('click', this._toggleLike)
    this._trash.addEventListener('click', () => { this._deleteCard() })
    this._image.addEventListener('click', () => { this.handleCardClick() })
  }
}
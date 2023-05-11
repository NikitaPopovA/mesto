export class Card {
  constructor({ data, templateSelector, handleCardClick, handleDeleteCard, hundleLikeClick, userId }) {
    this._cardSelector = templateSelector;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner;
    this._ownerId = data.owner._id;
    this._cardId = data.cardId;
    this._userId = userId;
    this.handleCardClick = handleCardClick;
    this.handleDeleteCard = handleDeleteCard;
    this.hundleLikeClick = hundleLikeClick;
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.grid-card__image')
    this._title = this._card.querySelector('.grid-card__title')
    this._like = this._card.querySelector('.grid-card__like')
    this._trash = this._card.querySelector('.grid-card__btn-delete')
    this._cauntLikes = this._card.querySelector('.grid-card__counter-likes')
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.grid-card')
      .cloneNode(true)
    return cardElement
  }

  _activateLike() {
    this._like.classList.add('grid-card__like_active');
  }

  _disactivateLike() {
    this._like.classList.remove('grid-card__like_active');
  }

  deleteCard() {
    this._card.remove();
    this._card = null;
  }


  isLiked() {
    if (this._likes.find((element) => element._id === this._userId)) {
      return true
    }
  }

  setLikes(newLikes) {
    this._likes = newLikes
    this._cauntLikes.textContent = this._likes.length;

    if (this.isLiked()) {
      this._activateLike()
    } else {
      this._disactivateLike()
    }
  }

  generateCard() {
    this._image.src = this._link;
    this._image.alt = this._name;
    this._title.textContent = this._name;
    this.setLikes(this._likes);
    if (this._userId !== this._ownerId) {
      this._trash.style.display = 'none'
    }

    this._setEventListeners()
    return this._card;
  }

  _setEventListeners() {
    this._like.addEventListener('click', () => { this.hundleLikeClick(this._cardId) })
    this._trash.addEventListener('click', () => { this.handleDeleteCard(this._cardId) })
    this._image.addEventListener('click', () => { this.handleCardClick() })
  }
}

export default class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  };

   // Метод _getTemplate возвращает клонированный шаблон карточки.
  _getTemplate = () => {
    const cardElement = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.grid-card')
    .cloneNode(true);
    return cardElement;
  }

  // Метод generateCard создает и заполняет карточку с помощью полученных данных и шаблона.
  generateCard = () => {
    this._card = this._getTemplate();
    this._image = this._card.querySelector('.grid-card__image');
    this._title = this._card.querySelector('.grid-card__title');
    this._like = this._card.querySelector('.grid-card__like');
    this._trash = this._card.querySelector('.grid-card__btn-delete');
    this._setEventListener();
    this._title.textContent = this._name;
    this._image.src = this._link;
    this._image.alt = this._name;
    return this._card;
  };

   // Метод _setEventListener устанавливает обработчики событий для элементов карточки, включая лайк, удаление и клик на изображение.
  _setEventListener = () => {
    this._like.addEventListener('click', (event) => {
      event.target.classList.toggle('grid-card__like_active')
    });
    this._trash.addEventListener('click', () => {
      this._card.remove()
    });
    this._image.addEventListener('click', () => {
      this._handleCardClick( this._name, this._link )
    });
  }
};

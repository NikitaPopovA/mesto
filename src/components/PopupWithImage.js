import { Popup } from './Popup.js'
export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup)
    this.magnificationTitle = this._popup.querySelector('.popup__magnification-title')
    this.popupImage = this._popup.querySelector('.popup__magnification-imag')
  }

  open(item) {
    super.open()
    this.magnificationTitle.textContent = item.name;
    this.popupImage.alt = item.name;
    this.popupImage.src = item.link;
  }
}
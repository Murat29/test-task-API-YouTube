export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._data = data;
    this._title = data.name;
    this._image = data.link;
    this._like = data.likes.length;
    this._openImgPopup = openImgPopup;
    this._ownerId = data.owner._id;
    this._myId = myId;
    this._cardId = data._id;
    this._сonsentPopup = сonsentPopup;
    this._сonsentSabmitBatton = сonsentSabmitBatton;
    this._apiDeleteCard = apiDeleteCard;
    this._apiLike = apiLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__card")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".cards__image");
    this._element.querySelector(".cards__title").textContent = this._title;
    this._cardImage.src = this._image;
    this._cardImage.alt = `Изображение места ${this._title}`;
    this._likeNumber = this._element.querySelector(".card__like-number");
    this._installLike(this._data);
    this._setEventListeners();

    return this._element;
  }
}

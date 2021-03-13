export class Card {
  constructor(data, index, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.title;
    this._channelTitle = data.channelTitle;
    this._publishTime = data.publishTime.slice(0, 10);
    this._videoId = data.videoId;
    this._index = index;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-element")
      .cloneNode(true);
    return cardElement;
  }

  _check;

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardTitle.textContent = this._title;
    this._cardTitle.setAttribute("data-target", `#item-${this._index}`);
    this._element
      .querySelector(".card__hidden-container")
      .setAttribute("id", `item-${this._index}`);

    this._element.querySelector(
      ".card__author"
    ).textContent = `Название канала: ${this._channelTitle}`;
    this._element.querySelector(
      ".card__date"
    ).textContent = `Дата публикации: ${this._publishTime}`;
    this._element.querySelector(
      ".card__iframe"
    ).src = `https://www.youtube.com/embed/${this._videoId}?origin=http://example.com`;
    return this._element;
  }
}

export class Card {
  constructor(data, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.title;
    this._channelTitle = data.channelTitle;
    this._publishTime = data.publishTime;
    this._videoId = data.videoId;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".card-element")
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".card__title");
    this._cardTitle.textContent = this._title;
    this._cardTitle.setAttribute("data-target", `#${this._videoId}`);
    this._element.querySelector(".card__hidden-container").setAttribute("id", this._videoId);

    this._element.querySelector(".card__author").textContent = this._channelTitle;
    this._element.querySelector(".card__date").textContent = this._publishTime;
    this._element.querySelector(
      ".card__iframe"
    ).src = `http://www.youtube.com/embed/${this._videoId}?origin=http://example.com`;
    return this._element;
  }
}

//класс, который добавляет разметку на страницу
export class Section {
  constructor(renderer, containerSelector) {
    this._renderer = renderer;
    this._container = containerSelector;
  }

  setItemPrepend(element) {
    this._container.prepend(element);
  }

  renderItems(data) {
    data.forEach((item, i) => {
      this._renderer(item, i);
    });
  }
}

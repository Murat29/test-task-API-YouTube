export class Api {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getVideos(request) {
    return fetch(
      `${this.url}/search?part=snippet&q=${request}&type=video&maxResults=10&order=date&key=AIzaSyBjUM_hSMEJKkg-_ui7dM1vCN3siDN-474`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._getResponseData);
  }

  getStatisticscVideos(videoId) {
    return fetch(
      `${this.url}/videos?part=statistics&id=${videoId}&key=AIzaSyBjUM_hSMEJKkg-_ui7dM1vCN3siDN-474`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._getResponseData);
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
  }
}

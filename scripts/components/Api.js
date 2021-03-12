export class Api {
  constructor(config) {
    this.headers = config.headers;
    this.url = config.url;
  }

  getVideos() {
    return fetch(
      `${this.url}/search?part=snippet&q=swimming&type=video&maxResults=3&order=date&key=AIzaSyC4EGmQM2Xt8rpupN3FmF9gHOFNBM_wA1o`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._getResponseData);
  }

  getStatisticscVideos(videoId) {
    return fetch(
      `${this.url}/videos?part=statistics&id=${videoId}&key=AIzaSyC4EGmQM2Xt8rpupN3FmF9gHOFNBM_wA1o`,
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

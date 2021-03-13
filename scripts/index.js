import { Api } from "./components/Api.js";
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import { cardsContainer, form, formInput, query, spinner } from "./components/utils/constants.js";

const api = new Api({
  url: "https://www.googleapis.com/youtube/v3",
});

const instanceСlassSection = new Section(renderer, cardsContainer);

function renderer(item, index) {
  const instanceСlassСard = new Card(item, index, ".card-template");
  const newCard = instanceСlassСard.generateCard();
  instanceСlassSection.setItemPrepend(newCard);
}
form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  clearSearch();
  spinner.classList.remove("d-none");
  const request = formInput.value;
  api
    .getVideos(request)
    .then((date) => {
      return date.items.map((video) => {
        return {
          title: video.snippet.title,
          channelTitle: video.snippet.channelTitle,
          publishTime: video.snippet.publishTime,
          videoId: video.id.videoId,
        };
      });
    })
    .then((videos) => {
      return new Promise((resolve) => {
        api
          .getStatisticscVideos(videos.map((video) => video.videoId).join())
          .then((date) =>
            videos
              .map((video, i) => {
                video.viewCount = date.items[i].statistics.viewCount;
                return video;
              })
              .sort((a, b) => {
                return b.viewCount - a.viewCount;
              })
          )
          .then((videos) => {
            console.log(videos);
            query.textContent = `Результат поиска по запросу: ${request}`;
            instanceСlassSection.renderItems(videos);
            resolve();
          });
      });
    })
    .catch((err) => console.log(err))
    .finally(() => {
      spinner.classList.add("d-none");
    });
});

function clearSearch() {
  query.textContent = "";
  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.lastChild);
  }
}

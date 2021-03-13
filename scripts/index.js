import { Api } from "./components/Api.js";
import { Section } from "./components/Section.js";
import { Card } from "./components/Card.js";
import test from "../test.js";

const api = new Api({
  url: "https://www.googleapis.com/youtube/v3",
});

const cardsContainer = document.querySelector(".cards-container");
const instanceСlassSection = new Section(renderer, cardsContainer);

function renderer(item) {
  const instanceСlassСard = new Card(item, ".card-template");
  const newCard = instanceСlassСard.generateCard();
  instanceСlassSection.setItemPrepend(newCard);
}

document.querySelector(".button-search").addEventListener("click", () => {
  const request = document.querySelector(".input-search").value;
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
      api
        .getStatisticscVideos(videos.map((video) => video.videoId).join())
        .then((date) =>
          videos.map((video, i) => {
            video.viewCount = date.items[i].statistics.viewCount;
            return video;
          })
        )
        .then((videos) => {
          videos.sort((a, b) => {
            return b.viewCount - a.viewCount;
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

instanceСlassSection.renderItems(test);

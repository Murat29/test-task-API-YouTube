import { Api } from "./components/Api.js";
import test from "../test.js";

const api = new Api({
  url: "https://www.googleapis.com/youtube/v3",
});

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
      return api
        .getStatisticscVideos(videos.map((video) => video.videoId).join())
        .then((date) =>
          videos.map((video, i) => {
            video.viewCount = date.items[i].statistics.viewCount;
            return video;
          })
        )
        .then((videos) => {
          videos.sort((a, b) => {
            console.log(a);
            return b.viewCount - a.viewCount;
          });
          console.log(videos);
        })
        .catch((err) => console.log(err));
    })

    .catch((err) => console.log(err));
});

// const instanceСlassSection = new Section(renderer, cardsContainer);

// function renderer(item) {
//   const instanceСlassСard = new Card(
//     item,
//     ".card-template",
//     imgPopup.handleCardClick.bind(imgPopup),
//     сonsentPopup,
//     myId,
//     сonsentSabmitBatton,
//     apiDeleteCard,
//     apiLike
//   );
//   const newCard = instanceСlassСard.generateCard();
//   instanceСlassSection.setItemPrepend(newCard);
// }

// instanceСlassSection.renderItems(initialCardsList);

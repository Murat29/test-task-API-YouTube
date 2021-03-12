// import { Api } from "./components/Api.js";

// const api = new Api({
//   url: "https://www.googleapis.com/youtube/v3",
// });

// api
//   .getVideos()
//   .then((date) => {
//     return date.items.map((video) => {
//       return {
//         title: video.snippet.title,
//         channelTitle: video.snippet.channelTitle,
//         publishTime: video.snippet.publishTime,
//         videoId: video.id.videoId,
//       };
//     });
//   })
//   .then((videos) => {
//     api.getStatisticscVideos(videos.map((video) => video.videoId).join()).then((date) =>
//       videos.forEach((video, i) => {
//         video.viewCount = date.items[i].statistics.viewCount;
//       })
//     );
//     return videos;
//   })
//   .then((videos) => console.log(videos));

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

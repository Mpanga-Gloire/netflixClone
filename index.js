const APIKEY = "3c07e5eca9b661298830bfcdb4c67166";
const TRENDING = `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`;
const SHOWS = `https://api.themoviedb.org/3/trending/tv/day?api_key=${APIKEY}`;
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}`;
const TODAY = `https://api.themoviedb.org/3/tv/airing_today?api_key=${APIKEY}`;
const bigPostAttach = document.querySelector(".big-post__info");
const movieAttachment = document.querySelector("#movies");
const showsAttachment = document.querySelector("#shows");
const upcommingAttachment = document.querySelector("#upcomming");
const commingAttachment = document.querySelector("#coming");
const bigPostImage = document.querySelector(".big-post");
let bigPost = ``;

const getData = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};

//GET TOP RATED MOVIES

getData(TRENDING).then((data) => {
  let random = Math.floor(Math.random() * data.results.length);
  let bigPostMovie = data.results[random];
  bigPostImage.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${bigPostMovie.backdrop_path})`;
  bigPost = `<div class="big-post__title">${bigPostMovie.original_title.slice(
    0,
    20
  )}...</div>
            <div class="big-post__descr">${bigPostMovie.overview.slice(
              0,
              200
            )}...</div>`;
  bigPostAttach.insertAdjacentHTML("afterbegin", bigPost);

  data.results.forEach((ele) => {
    let post = `
      <div class="post-image">
        <img
          src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
          alt="post"
          class="post-img"
        />
      </div>
    `;
    movieAttachment.insertAdjacentHTML("afterbegin", post);
  });
});

//GET TRENDING

getData(SHOWS).then((data) => {
  data.results.forEach((ele) => {
    let post = `
      <div class="post-image">
        <img
          src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
          alt="post"
          class="post-img"
        />
      </div>
    `;
    upcommingAttachment.insertAdjacentHTML("afterbegin", post);
  });
});

getData(UPCOMING).then((data) => {
  data.results.forEach((ele) => {
    let post = `
      <div class="post-image">
        <img
          src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
          alt="post"
          class="post-img"
        />
      </div>
    `;
    showsAttachment.insertAdjacentHTML("afterbegin", post);
  });
});

getData(TODAY).then((data) => {
  data.results.forEach((ele) => {
    let post = `
      <div class="post-image">
        <img
          src="https://image.tmdb.org/t/p/w500${ele.poster_path}"
          alt="post"
          class="post-img"
        />
      </div>
    `;
    commingAttachment.insertAdjacentHTML("afterbegin", post);
  });
});

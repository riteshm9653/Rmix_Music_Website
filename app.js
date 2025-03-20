const music = new Audio("audio");
music.play();
music.volume = 1.0; // Set to full volume
music.muted = false;

const masterPlay = document.getElementById("masterPlay");
music.play().catch((error) => console.error("Playback error:", error));
const songs = [
  {
    id: "1",
    songName: `<h5>
                on My Way <br>
                <div class="subtitle">Alan Walker</div>
                `,
    poster: "./img/1.jpg",
  },
  {
    id: "2",
    songName: `Alan Walker-Fade  <br>
              <div class="subtitle">Alan Walker</div>
              `,
    poster: "./img/2.jpg",
  },
  {
    id: "3",
    songName: `Cartoon-on    <br>
              <div class="subtitle">Daniel Levi</div>
              `,
    poster: "./img/3.jpg",
  },
  {
    id: "4",
    songName: `Warriyo-Mortal  <br>
              <div class="subtitle">Mortal</div>
              `,
    poster: "./img/4.jpg",
  },
  {
    id: "5",
    songName: `Ertugurlu Gazi   <br>
              <div class="subtitle">Ertungul</div>
              `,
    poster: "./img/5.jpg",
  },
  {
    id: "6",
    songName: ` Electronic Music  <brlectro>
              <div class="subtitle">E</div>
              `,
    poster: "./img/6.jpg",
  },
  {
    id: "7",
    songName: `Agar Tum Sath ho  <br>
              <div class="subtitle">Tamashaa</div>
              `,
    poster: "./img/7.jpg",
  },
  {
    id: "8",
    songName: `Sunna Hai  <br>
              <div class="subtitle">Neha kakker</div>
              `,
    poster: "./img/8.jpg",
  },
  {
    id: "9",
    songName: `Dilber   <br>
              <div class="subtitle">Satyameva jayate</div>
              `,
    poster: "./img/9.jpg",
  },
  {
    id: "10",
    songName: `Duniya  <br>
              <div class="subtitle">Luka chuppi</div>
              `,
    poster: "./img/10.jpg",
  },
  {
    id: "11",
    songName: `Lagdi Lahore Di   <br>
              <div class="subtitle">Street Dancer 3D</div>
              `,
    poster: "./img/11.jpg",
  },
  {
    id: "12",
    songName: `putt jatt  Da  <br>
              <div class="subtitle"> Putt jatt Da</div>
              `,
    poster: "./img/12.jpg",
  },
  {
    id: "13",
    songName: `Alan Walker-Fade  <br>
              <div class="subtitle">Alan Walker</div>
              `,
    poster: "./img/13.jpg",
  },
  {
    id: "14",
    songName: ` vaaste  <br>
              <div class="subtitle">Dhvani Bhanushali </div>
              `,
    poster: "./img/14.jpg",
  },
  {
    id: "15",
    songName: `Lut gaye  <br>
              <div class="subtitle">Jublic Nautiyaal</div>
              `,
    poster: "./img/15.jpg",
  },

  {
    id: "21",
    songName: `sun rah hai na thu  <br>
              <div class="subtitle">Best</div>
              `,
    poster: "./img/21.jpg",
  },
  {
    id: "23",
    songName: ` Thank you  <br>
              <div class="subtitle">Ritesh Maurya</div>
              `,
    poster: "./img/23.jpg",
  },
];

document.querySelectorAll(".songItem").forEach((element, i) => {
  const img = element.querySelector("img");
  const h5 = element.querySelector("h5");

  if (img && h5 && songs[i]) {
    img.src = songs[i].poster;
    h5.innerHTML = songs[i].songName;
  }
});
document.querySelectorAll("#songItem").forEach((element, i) => {
  const img = element.querySelector("img");
  const h5 = element.querySelector("h5");

  if (img && h5 && songs[i]) {
    img.src = songs[i].poster;
    h5.innerHTML = songs[i].songName;
  }
});

const wave = document.getElementsByClassName("wave");
masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    wave[0].classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("fa-play");
    masterPlay.classList.remove("fa-pause");
    wave[0].classList.remove("active2");
  }
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("playListplay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

const makeallBackgrounds = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((element) => {
    element.style.background = "black"; // ✅
    // element.classList.remove("fa-circle-pause");
    // element.classList.add("fa-circle-play");
  });
};
let index = 0;
const poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementById("dot");

Array.from(document.getElementsByClassName("playListplay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      // console.log("Ritesh" + e.target);
      // console.log("target" + e.target.id);
      index = e.target.id;
      // console.log("index" + index);
      makeAllPlays();
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      music.src = `./audio/${index}.mp3`;
      music.play();
      let song_title = songs.filter((song) => song.id == index);
      song_title.forEach((element) => {
        title.innerHTML = element.songName;
      });
      masterPlay.classList.remove("fa-play");
      masterPlay.classList.add("fa-pause");
      poster_master_play.src = `./img/${index}.jpg`;
      wave[0].classList.add("active2");
      music.addEventListener("ended", () => {
        makeAllPlays();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        wave[0].classList.remove("active2");
      });
      makeallBackgrounds();
      Array.from(document.getElementsByClassName("songItem"))[
        `${index - 1}`
      ].style.background = "rgba(105,105,170,0.8)";
    });
  }
);

// Menu
const currentStart = document.getElementById("currentStart");
const currentEnd = document.getElementById("currentEnd");

// ✅ Listen to the `timeupdate` event
music.addEventListener("timeupdate", () => {
  const music_curr = music.currentTime;
  const music_dur = music.duration;

  // ✅ Ensure music duration is valid
  if (!isNaN(music_dur) && music_dur > 0) {
    // Format duration time (end time)
    let min = Math.floor(music_dur / 60);
    let sec = Math.floor(music_dur % 60);
    sec = sec < 10 ? `0${sec}` : sec; // Add leading zero if needed
    currentEnd.innerHTML = `${min}:${sec}`;

    // Format current time (start time)
    let min1 = Math.floor(music_curr / 60);
    let sec1 = Math.floor(music_curr % 60);
    sec1 = sec1 < 10 ? `0${sec1}` : sec1; // Add leading zero if needed
    currentStart.innerHTML = `${min1}:${sec1}`;

    // ✅ Update the progress bar
    const progressbar = (music_curr / music_dur) * 100;
    seek.value = progressbar;
    bar2.style.width = `${progressbar}%`;
    dot.style.left = `${progressbar}%`;
  }
});

// ✅ Seek event listener
seek.addEventListener("change", () => {
  if (!isNaN(music.duration) && music.duration > 0) {
    music.currentTime = (seek.value * music.duration) / 100;
  }
});

// end
music.addEventListener("ended", () => {
  masterPlay.classList.add("fa-play");
  masterPlay.classList.remove("fa-pause");
  wave[0].classList.remove("active2");
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_dot = document.getElementById("vol_dot");
let vol_bar = document.getElementById("vol_bar");

// ✅ Use "change" as a string
vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("fa-volume-up");
    vol_icon.classList.add("fa-volume-mute");
    vol_icon.classList.remove("fa-solid", "fa-volume-high");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("fa-volume-mute");
    vol_icon.classList.add("fa-volume-up");
    vol_icon.classList.remove("fa-solid", "fa-volume-high");
  }
  if (vol.value > 50) {
    vol_icon.classList.remove("fa-volume-mute", "fa-volume-up");
    vol_icon.classList.add("fa-volume-high");
  }

  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}%`;
  vol_dot.style.left = `${vol_a}%`;
  music.volume = vol.value / 100; // Set volume properly
});

// ✅ Mute/Unmute functionality
vol_icon.addEventListener("click", () => {
  if (music.volume > 0) {
    music.volume = 0;
    vol.value = 0;
    vol_icon.classList.remove("fa-volume-up");
    vol_icon.classList.add("fa-volume-mute");
  } else {
    music.volume = 1;
    vol.value = 100;
    vol_icon.classList.remove("fa-volume-mute");
    vol_icon.classList.add("fa-volume-up");
  }
});

let back = document.getElementById("back");
let next = document.getElementById("next");
back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }
  music.src = `./audio/${index}.mp3`;
  music.play();
  let song_title = songs.filter((song) => song.id == index);
  song_title.forEach((element) => {
    title.innerHTML = element.songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-circle-play");
  document.getElementById(`${index}`).classList.add("fa-circle-pause");
  poster_master_play.src = `./img/${index}.jpg`;
  wave[0].classList.add("active2");
  makeallBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgba(105,105,170,0.8)";
});

next.addEventListener("click", () => {
  index += 1;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }
  music.src = `./audio/${index}.mp3`;
  music.play();
  let song_title = songs.filter((song) => song.id == index);
  song_title.forEach((element) => {
    title.innerHTML = element.songName;
  });
  makeAllPlays();
  document.getElementById(`${index}`).classList.remove("fa-circle-play");
  document.getElementById(`${index}`).classList.add("fa-circle-pause");
  poster_master_play.src = `./img/${index}.jpg`;
  wave[0].classList.add("active2");
  makeallBackgrounds();
  Array.from(document.getElementsByClassName("songItem"))[
    `${index - 1}`
  ].style.background = "rgba(105,105,170,0.8)";
});

// });

const right_scroll = document.getElementById("arrow-rights");
const left_scroll = document.getElementById("arrow-lefts");
let pop_song = document.getElementsByClassName("pop_song")[0];
left_scroll.addEventListener("click", () => {
  pop_song.scrollLeft -= 250;
});

right_scroll.addEventListener("click", () => {
  pop_song.scrollLeft += 250;
});

const right_scrolls = document.getElementById("right_scrolls");
const left_scrolls = document.getElementById("left_scrolls");
let items = document.getElementById("items");
left_scrolls.addEventListener("click", () => {
  items.scrollLeft -= 130;
});
right_scrolls.addEventListener("click", () => {
  items.scrollLeft += 130;
});

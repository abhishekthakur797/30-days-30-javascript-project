let progress = document.getElementById("progress");
let song = document.getElementById("song");
let playPauseIcon = document.getElementById("play-pause");

song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
};

playPauseIcon.addEventListener("click", function playPause() {
  if (playPauseIcon.classList.contains("fa-pause")) {
    song.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  } else {
    song.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  }
});

if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.oninput = function () {
  song.currentTime = parseFloat(progress.value);

  if (song.paused) {
    song.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  }
};

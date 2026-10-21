const song = document.getElementById("song");
const progress = document.getElementById("progress");
const playPauseBtn = document.getElementById("play-pause");
const playPauseIcon = playPauseBtn.querySelector("i");
const muteBtn = document.getElementById("mute");
const currentTimeText = document.getElementById("current-time");
const durationText = document.getElementById("duration");

// 125 seconds -> "2:05"
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${String(secs).padStart(2, "0")}`;
}

function updatePlayIcon() {
  playPauseIcon.className = song.paused ? "fa-solid fa-play" : "fa-solid fa-pause";
  playPauseBtn.setAttribute("aria-label", song.paused ? "Play" : "Pause");
}

// Once the song's length is known, set up the progress bar.
song.addEventListener("loadedmetadata", () => {
  progress.max = song.duration;
  durationText.textContent = formatTime(song.duration);
});

// Move the progress bar as the song plays.
song.addEventListener("timeupdate", () => {
  progress.value = song.currentTime;
  currentTimeText.textContent = formatTime(song.currentTime);
});

song.addEventListener("play", updatePlayIcon);
song.addEventListener("pause", updatePlayIcon);
song.addEventListener("ended", updatePlayIcon);

playPauseBtn.addEventListener("click", () => {
  if (song.paused) song.play();
  else song.pause();
});

// Seek when the user drags the progress bar.
progress.addEventListener("input", () => {
  song.currentTime = Number(progress.value);
});

document.getElementById("rewind").addEventListener("click", () => {
  song.currentTime = Math.max(0, song.currentTime - 10);
});

document.getElementById("forward").addEventListener("click", () => {
  song.currentTime = Math.min(song.duration || 0, song.currentTime + 10);
});

muteBtn.addEventListener("click", () => {
  song.muted = !song.muted;
  muteBtn.querySelector("i").className = song.muted ? "fa-solid fa-volume-xmark" : "fa-solid fa-volume-high";
  muteBtn.setAttribute("aria-label", song.muted ? "Unmute" : "Mute");
});

// Space bar toggles play/pause.
document.addEventListener("keydown", (event) => {
  if (event.code === "Space" && event.target === document.body) {
    event.preventDefault();
    playPauseBtn.click();
  }
});

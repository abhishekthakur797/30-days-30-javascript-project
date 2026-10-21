const displayTime = document.getElementById("displayTime");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

// Add a leading zero: 5 -> "05"
const pad = (value) => String(value).padStart(2, "0");

function updateDisplay() {
  displayTime.textContent = `${pad(hours)} : ${pad(minutes)} : ${pad(seconds)}`;
}

function tick() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

function watchStart() {
  if (timer) return; // already running
  timer = setInterval(tick, 1000);
}

function watchStop() {
  clearInterval(timer);
  timer = null;
}

function watchReset() {
  watchStop();
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
}

startBtn.addEventListener("click", watchStart);
stopBtn.addEventListener("click", watchStop);
resetBtn.addEventListener("click", watchReset);

let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopwatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h} : ${m} : ${s}`;
}

function watchStart() {
  if (timer != null) {
    clearInterval(timer);
  }
  timer = setInterval(stopwatch, 1000);
}

let start = document.getElementById("start");
start.addEventListener("click", function () {
  watchStart();
});

// code for watch to reset and stop

let stop = document.getElementById("stop");
stop.addEventListener("click", function watchStop() {
  clearInterval(timer);
});

let reset = document.getElementById("reset");
reset.addEventListener("click", function watchReset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayTime.innerHTML = "00 : 00 : 00";
});

const container = document.querySelector("#container");
const heart = document.querySelector("#container i");
let hideTimer = null;

// Show the heart on double-click (or double-tap on mobile), then hide it again.
container.addEventListener("dblclick", () => {
  clearTimeout(hideTimer);
  heart.style.opacity = 0.8;
  heart.style.transform = "translate(-50%, -50%) scale(1)";

  hideTimer = setTimeout(() => {
    heart.style.transform = "translate(-50%, -50%) scale(0)";
    heart.style.opacity = 0;
  }, 1200);
});

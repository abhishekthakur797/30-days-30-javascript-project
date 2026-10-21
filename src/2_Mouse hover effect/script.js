const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

// The cursor is position: fixed in CSS, so we can move it with left/top.
main.addEventListener("mousemove", (event) => {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

// Hide the dot when the mouse leaves the window.
main.addEventListener("mouseleave", () => (cursor.style.opacity = 0));
main.addEventListener("mouseenter", () => (cursor.style.opacity = 1));

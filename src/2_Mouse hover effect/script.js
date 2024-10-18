const main = document.querySelector("#main");
const cursor = document.querySelector(".cursor");

// Cursor needs 'position: absolute' or 'fixed' in CSS to move with mouse
main.addEventListener("mousemove", function (count) {
  // Set the 'left' and 'top' positions of the cursor to match the mouse x and y coordinates
  cursor.style.left = count.x + "px";
  cursor.style.top = count.y + "px";
});

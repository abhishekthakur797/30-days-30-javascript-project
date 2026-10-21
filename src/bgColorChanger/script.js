const buttonBar = document.getElementById("color-buttons");
let currentColor = "bg-black";

// One click listener on the bar handles every button.
buttonBar.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  document.body.classList.replace(currentColor, button.dataset.color);
  currentColor = button.dataset.color;
});

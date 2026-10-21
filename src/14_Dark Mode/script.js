// Theme toggle (saved in localStorage so it's remembered on reload)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function setTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("bg-black", isDark);
  body.classList.toggle("text-white", isDark);
  body.classList.toggle("bg-white", !isDark);
  body.classList.toggle("text-black", !isDark);
  themeToggle.classList.toggle("fa-sun", isDark);
  themeToggle.classList.toggle("fa-moon", !isDark);
  localStorage.setItem("portfolio-theme", theme);
}

themeToggle.addEventListener("click", () => {
  setTheme(body.classList.contains("bg-black") ? "light" : "dark");
});

setTheme(localStorage.getItem("portfolio-theme") || "light");

// Mobile navbar
const mobileMenu = document.getElementById("mobile-ul");

document.getElementById("show-menu").addEventListener("click", () => {
  mobileMenu.classList.replace("hidden", "flex");
});

// Close the menu with the X button or by tapping any link inside it.
mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest("#hide-menu, a")) {
    mobileMenu.classList.replace("flex", "hidden");
  }
});

// Footer year and live clock
document.getElementById("year").textContent = new Date().getFullYear();

function updateClock() {
  document.getElementById("clock").textContent = `Current Time: ${new Date().toLocaleTimeString()}`;
}

setInterval(updateClock, 1000);
updateClock();

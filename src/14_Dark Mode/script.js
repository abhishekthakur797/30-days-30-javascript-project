const themeToggle = document.getElementById("theme-toggle");
const container = document.getElementById("container");

themeToggle.addEventListener("click", function () {
  if (
    container.classList.contains("bg-white") &&
    container.classList.contains("text-black")
  ) {
    container.classList.remove("bg-white", "text-black");
    container.classList.add("bg-black", "text-white");
    themeToggle.classList.remove("fa-sun");
    themeToggle.classList.add("fa-moon");
  } else {
    container.classList.remove("bg-black", "text-white");
    container.classList.add("bg-white", "text-black");
    themeToggle.classList.remove("fa-moon");
    themeToggle.classList.add("fa-sun");
  }
});

// Script for mobile navbar
const showMenu = document.getElementById("show-menu");
const hideMenu = document.getElementById("hide-menu");
const mobileUl = document.getElementById("mobile-ul");

hideMenu.addEventListener("click", function hideMenu() {
  if (mobileUl.classList.contains("flex")) {
    mobileUl.classList.remove("flex");
    mobileUl.classList.add("hidden");
  }
});

showMenu.addEventListener("click", function showMenu() {
  if (mobileUl.classList.contains("hidden")) {
    mobileUl.classList.remove("hidden");
    mobileUl.classList.add("flex");
  }
});

// script for current time in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Function to display the real-time clock
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  document.getElementById("clock").textContent = `Current Time: ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock();

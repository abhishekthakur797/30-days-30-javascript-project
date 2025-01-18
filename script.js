// This file contains the JavaScript code for the theme toggle button.
const themeToggle = document.getElementById("theme-toggle");
const container = document.getElementById("body-container");

themeToggle.addEventListener("click", function () {
  if (
    container.classList.contains("bg-white") &&
    container.classList.contains("text-black")
  ) {
    container.classList.remove("bg-white", "text-black");
    container.classList.add("bg-black", "text-white");
    themeToggle.classList.add("fa-sun");
    themeToggle.classList.remove("fa-moon");
  } else {
    container.classList.remove("bg-black", "text-white");
    container.classList.add("bg-white", "text-black");
    themeToggle.classList.add("fa-moon");
    themeToggle.classList.remove("fa-sun");
  }
});

// This file contains the JavaScript code for the mobile menu.

const mobileMenu = document.getElementById("mobile-menu");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeMenu = document.getElementById("hide-menu");

hamburgerMenu.addEventListener("click", function () {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  }
});

closeMenu.addEventListener("click", function () {
  if (mobileMenu.classList.contains("block")) {
    mobileMenu.classList.remove("block");
    mobileMenu.classList.add("hidden");
  }
});

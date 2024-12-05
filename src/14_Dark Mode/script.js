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

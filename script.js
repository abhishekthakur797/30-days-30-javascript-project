// List of projects shown on the home page.
const projects = [
  { title: "Instagram Like Effect", icon: "fa-solid fa-heart", path: "src/1_Instagram Love Like Effect", desc: "Double-tap an image to show a heart animation." },
  { title: "Mouse Hover Effect", icon: "fa-solid fa-arrow-pointer", path: "src/2_Mouse hover effect", desc: "A custom cursor that follows the mouse." },
  { title: "Weather App", icon: "fa-solid fa-cloud-sun", path: "src/3_Weather App", desc: "Live weather for any city using the OpenWeather API." },
  { title: "To-Do List", icon: "fa-regular fa-circle-check", path: "src/4_TO DO List", desc: "Add, complete and delete tasks. Saved in your browser." },
  { title: "Quiz App", icon: "fa-solid fa-circle-question", path: "src/5_QUIZ APP", desc: "A cricket quiz with scoring." },
  { title: "Password Generator", icon: "fa-solid fa-user-secret", path: "src/6_Random Password Generator", desc: "Generate and copy a strong random password." },
  { title: "Age Calculator", icon: "fa-solid fa-cake-candles", path: "src/7_Age Calculator", desc: "Your exact age in years, months and days." },
  { title: "Notes App", icon: "fa-regular fa-note-sticky", path: "src/8_Notes App", desc: "Write and delete notes. Saved in your browser." },
  { title: "Quote Generator", icon: "fa-solid fa-quote-left", path: "src/9_Quote Generator", desc: "Random quotes you can share on X." },
  { title: "QR Code Generator", icon: "fa-solid fa-qrcode", path: "src/10_QR Code Generator", desc: "Turn any text or URL into a QR code." },
  { title: "Stopwatch", icon: "fa-solid fa-stopwatch", path: "src/11_Stopwatch", desc: "Start, stop and reset a stopwatch." },
  { title: "Calculator", icon: "fa-solid fa-calculator", path: "src/12_Calculator", desc: "A basic calculator with keyboard support." },
  { title: "Music Player", icon: "fa-solid fa-music", path: "src/13_Music Player", desc: "Play, pause and seek through a song." },
  { title: "Dark Mode Theme", icon: "fa-solid fa-cloud-moon", path: "src/14_Dark Mode", desc: "A portfolio page with a light/dark toggle." },
  { title: "BG Color Changer", icon: "fa-solid fa-palette", path: "src/bgColorChanger", desc: "Change the page background with one click." },
];

const projectsGrid = document.getElementById("projects");

projects.forEach((project, index) => {
  const card = document.createElement("a");
  card.href = `${project.path}/index.html`;
  card.className =
    "group flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-purple-500 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900";
  card.innerHTML = `
    <div class="flex items-center justify-between">
      <i class="${project.icon} text-3xl text-purple-600 dark:text-purple-400"></i>
      <span class="text-xs font-semibold text-slate-400">#${index + 1}</span>
    </div>
    <h3 class="text-lg font-bold">${project.title}</h3>
    <p class="flex-1 text-sm text-slate-600 dark:text-slate-400">${project.desc}</p>
    <span class="text-sm font-semibold text-green-600 group-hover:underline">
      Open Project <i class="fa-solid fa-arrow-right text-xs"></i>
    </span>
  `;
  projectsGrid.appendChild(card);
});

// Theme toggle (saved in localStorage)
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

function updateThemeIcon() {
  const isDark = document.documentElement.classList.contains("dark");
  themeIcon.className = isDark ? "fa-regular fa-sun" : "fa-regular fa-moon";
}

themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateThemeIcon();
});

updateThemeIcon();

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("hidden") === false;
  mobileMenu.classList.toggle("flex", isOpen);
  menuToggle.querySelector("i").className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

// Footer year and live clock
document.getElementById("year").textContent = new Date().getFullYear();

function updateClock() {
  document.getElementById("clock").textContent = `Current Time: ${new Date().toLocaleTimeString()}`;
}

setInterval(updateClock, 1000);
updateClock();

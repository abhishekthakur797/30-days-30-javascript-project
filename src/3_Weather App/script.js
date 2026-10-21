// Get a free API key from https://openweathermap.org/api and paste it here.
const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchForm = document.querySelector(".search");
const searchBox = document.querySelector(".search input");
const weatherBox = document.querySelector(".weather");
const weatherIcon = document.querySelector(".weather-icon");
const errorBox = document.querySelector(".error");

// Weather condition (from the API) -> icon file in img/
const icons = {
  Clouds: "clouds",
  Clear: "clear",
  Rain: "rain",
  Thunderstorm: "rain",
  Drizzle: "drizzle",
  Snow: "snow",
  Mist: "mist",
  Haze: "mist",
  Fog: "mist",
  Smoke: "mist",
};

function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = "block";
  weatherBox.style.display = "none";
}

async function checkWeather(city) {
  if (apiKey === "YOUR_API_KEY") {
    showError("Add your OpenWeather API key in script.js first.");
    return;
  }

  try {
    const response = await fetch(`${apiUrl}&q=${encodeURIComponent(city)}&appid=${apiKey}`);

    if (response.status === 404) {
      showError("Invalid city name");
      return;
    }
    if (!response.ok) {
      showError("Something went wrong. Please try again.");
      return;
    }

    const data = await response.json();

    document.querySelector(".city").textContent = data.name;
    document.querySelector(".temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
    // The API returns wind speed in m/s, so convert it to km/h.
    document.querySelector(".wind").textContent = `${(data.wind.speed * 3.6).toFixed(1)} km/h`;

    const icon = icons[data.weather[0].main] || "clouds";
    weatherIcon.src = `img/${icon}.png`;
    weatherIcon.alt = data.weather[0].description;

    errorBox.style.display = "none";
    weatherBox.style.display = "flex";
  } catch {
    showError("Network error. Check your internet connection.");
  }
}

// The form handles both the search button and the Enter key.
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = searchBox.value.trim();
  if (city) checkWeather(city);
});

// In apiKey you add your own api key for code to work.

const apiKey = "YOUR_API_KEY";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  // if user input wrong city name it will display error message.
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
  } else if (response.status == 200) {
    document.querySelector(".error").style.display = "none";
  }
  var data = await response.json();
  console.log(data);

  // injecting data coming from api innerHTML classes.
  // updating text data
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°c`;
  document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
  document.querySelector(".wind").innerHTML = `${data.wind.speed}km/h`;

  // image updating according to weather condition
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "img/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "img/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "img/mist.png";
  }

  // by default the weather details display is hide, it will change if user clicks on btn.
  document.querySelector(".weather-main").style.display = "block";
}

// now we will add a function if user enter city name search.
searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
});

// Add keydown event listener for the "Enter" key
searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkWeather(searchBox.value);
  }
});

const apikey = "ee42ae19e956b23bd84a9203599f9330";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".err").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/sun.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/heavy-rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/fog.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

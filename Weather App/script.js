const apikey = "ee42ae19e956b23bd84a9203599f9330"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore"

async function checkWeather(params) {
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data = await response.json();
    
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = data.main.temp + "°C";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " Km/hr";
}
checkWeather();


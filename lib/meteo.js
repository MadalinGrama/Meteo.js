let apikey = '552ddc55c6eb01ca07b9459d30fbcb3e';
let cityid = 'Bucharest';
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityid}&appid=${apikey}`;

getData();
async function getData() {
  const response = await fetch(apiurl);
  const data = await response.json();
  /*  Get all parameters and store in variables for Browser compatibility */
  let coord = data.coord;
  let lon = coord.lon;
  let lat = coord.lat;
  let weather = data.weather;
  let clouds = weather[0].main;
  let cloudsName = weather[0].description;
  let icon = weather[0].icon;
  let main = data.main;
  let kelvin = main.temp;
  // Kelvin formula: T(°C) = T(K) - 273.15
  let celsius = Math.round(kelvin - 273.15);
  let feelsLike = Math.round(main.feels_like - 273.15);
  let tempMin = main.temp_min;
  let tempMax = main.temp_max;
  let pressure = main.pressure;
  let humidity = main.humidity;
  let wind = data.wind;
  let windSpeed = wind.speed;
  let windDeg = wind.deg;
  let info = data.sys;
  let country = info.country;
  // Get Sunrise and Sunset
  // units; unix, UTC
  let sunrise = info.sunrise;
  let sunset = info.sunset;
  // Human Readable Time
  // Sunrise
  let sunriseTime = new Date(sunrise * 1000);
  let sunriseHours = sunriseTime.getHours();
  let sunriseMinutes = "0" + sunriseTime.getMinutes();
  let sunriseSeconds = "0" + sunriseTime.getSeconds();
  let sunriseHumanTime = sunriseHours + ':' + sunriseMinutes.substr(-2) + ':' + sunriseSeconds.substr(-2);
  // Sunset
  let sunsetTime = new Date(sunset * 1000);
  let sunsetHours = sunsetTime.getHours();
  let sunsetMinutes = "0" + sunsetTime.getMinutes();
  let sunsetSeconds = "0" + sunsetTime.getSeconds();
  let sunsetHumanTime = sunsetHours + ':' + sunsetMinutes.substr(-2) + ':' + sunsetSeconds.substr(-2);
  // console.log(data);
  pushData();
  function pushData() {
    document.getElementById("weather").textContent = cityid + " ";
    document.getElementById("temp").textContent = celsius + "°C";
    document.getElementById("wind").textContent = windSpeed + "m/s";
    document.getElementById("clouds").textContent = cloudsName;
    document.getElementById("pressure").textContent = pressure + " hpa";
    document.getElementById("humidity").textContent = humidity + "%";
    document.getElementById("sunrise").textContent = sunriseHumanTime;
    document.getElementById("sunset").textContent = sunsetHumanTime;
  }

}

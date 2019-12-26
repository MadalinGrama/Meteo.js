let apikey = '552ddc55c6eb01ca07b9459d30fbcb3e';
let cityid = 'Bucharest';
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityid}&appid=${apikey}`;


async function getData() {
  const response = await fetch(apiurl);
  const data = await response.json();
  /*  Get all parameters and store in variables for Browser compatibility */
  console.log(data);
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
  let celsius = kelvin - 273.15;
  let feelsLike = main.feels_like;
  let tempMin = main.temp_min;
  let tempMax = main.temp_max;
  let pressure = main.pressure;
  let humidity = main.humidity;

}

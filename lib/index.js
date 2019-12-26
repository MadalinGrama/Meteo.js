let apikey = '552ddc55c6eb01ca07b9459d30fbcb3e';
let cityid = 'Bucharest';
let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${cityid}&appid=${apikey}`;


async function getData() {
  const response = await fetch(apiurl);
  const data = await response.json();
  /*  Get all parameters and store in variables for Browser compatibility */
  console.log(data);
}

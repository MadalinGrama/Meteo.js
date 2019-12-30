# Meteo.js
> A simple javascript library that display the current weather of any city.

## Installation
```
# Using git clone
cd my-project
git clone https://github.com/MadalinGrama/Meteo.js.git

```

|Parameter | Description | Return |
--- | --- | ---
coord | Geo location; latitude and longitude | Object
lon | longitude | Integer
lat | latitude | Integer
weather | Weather conditions and icons | Object
clouds | Cloudiness | String
cloudsName | Cloudiness | String
icon | Weather icon id | String
main | Group of weather parameters (temp, feels, pressure.) | Object
kelvin | Temp in Kelvin | Integer
celsius | Temp in Celsius | Integer
feelsLike | Temp feels like | Integer
tempMin | Minimum temperature at the moment | Integer
tempMax | Maximum temperature at the momen | Integer
pressure | Atmospheric pressure | Integer
humidity | Humidity % | Integer
wind | Wind info | Object
windSpeed | Wind speed: meter/s | Integer
info | Country Code, Sunrise/Sunset Time | Object
country | Country Code | String
sunrise | Sunrise Time: unix, UTC | Integer
sunset | Sunset Time: unix, UTC    | Integer
sunriseTime | Mon Dec 30 2019 07:51:34 GMT+0200 | String
sunsetTIme | Mon Dec 30 2019 07:51:34 GMT+0200 | String
sunriseHours | Hours | Integer
sunsetHours | Hours | Integer
sunriseMinutes | Minutes | Integer
sunsetMinutes | Minutes | Integer
sunriseSeconds | Seconds | Integer
sunsetSeconds | Seconds | Integer
sunriseHumanTime | Hours + Minutes + Seconds | String
sunsetHumanTime | Hours + Minutes + Seconds | String

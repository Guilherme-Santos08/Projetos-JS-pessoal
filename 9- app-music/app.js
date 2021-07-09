const searchCity = document.getElementById("search")
const degCity = document.querySelector(".weather__city--deg")
const nameCity = document.querySelector(".weather__city--city")
const degMin = document.querySelector(".weather__minMax--min")
const degMax = document.querySelector(".weather__minMax--max")


const apikey = "85dbfd082e140fe6fa341825bd49d648"

async function getWeather(e) {
   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${apikey}`;
   const res = await fetch(API_URL)
   const data = await res.json()

   console.log(data)
}

getWeather("São Paulo")

// https://www.infoescola.com/fisica/conversao-de-escalas-termometricas/
// https://github.com/florinpop17/10-projects-10-hours/blob/master/weather-app/script.js
function KtoC(K) {
   return Math.floor(K - 273.15);
}


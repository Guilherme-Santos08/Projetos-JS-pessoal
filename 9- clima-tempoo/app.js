const inputWeather = document.querySelector(".input-search");
const btnSearch = document.querySelector(".btn-search");
const form = document.querySelector("form");

const container = document.querySelector(".container");

const weekName = document.querySelector(".day");
const degCity = document.querySelector(".weather__city--deg");
const nameCity = document.querySelector(".weather__city--city");
const degMin = document.querySelector(".weather__minMax--min span");
const degMax = document.querySelector(".weather__minMax--max span");
const weatherImg = document.querySelector(".weather__img--img");
const weatherSky = document.querySelector(".weather__img--sky");

const apikey = "85dbfd082e140fe6fa341825bd49d648";

const days = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
];

async function getWeather(e) {
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=${apikey}`;
  const res = await fetch(API_URL);
  const data = await res.json();

  setWeather(data);

  if (inputWeather.value) {
    container.classList.remove("remove");
  }
}

function setWeather(data) {
  const { main, name, weather } = data;
  const weatherTemp = KtoC(main.temp);
  const weatherTempMax = KtoC(main.temp_max);
  const weatherTempMin = KtoC(main.temp_min);

  const time = new Date();
  const day = time.getDay();

  weekName.innerHTML = days[day];
  degCity.innerHTML = `${weatherTemp}°C`;
  degMax.textContent = `${weatherTempMax}`;
  degMin.textContent = `${weatherTempMin}`;
  nameCity.innerHTML = name;

  weatherImg.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png `;
  weatherSky.innerHTML = `${weather[0].main}`;
}

// https://www.infoescola.com/fisica/conversao-de-escalas-termometricas/
// https://github.com/florinpop17/10-projects-10-hours/blob/master/weather-app/script.js
function KtoC(K) {
  return Math.floor(K - 273.15);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWeather(inputWeather.value);
});

btnSearch.addEventListener("click", () => {
  getWeather(inputWeather.value);
});

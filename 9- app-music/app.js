const searchCity = document.getElementById("search")

async function getWeather(e) {
   const API_PLACE = `https://api.troposphere.io/place/name/${e}?token=bbce94d2cfc23aefd03a7346b49d6ae929c57ecc2644e3df2c`
   const resPlace = await fetch(API_PLACE)
   const dataPlace = await resPlace.json()

   const teste = (dataPlace.data[0])
   const {latitude, longitude} = teste

   const API_FORECAST = `https://api.troposphere.io/forecast/${latitude},${longitude}?token=bbce94d2cfc23aefd03a7346b49d6ae929c57ecc2644e3df2c`
   const resForecast = await fetch(API_FORECAST)
   const dataForecast = await resForecast.json()

   console.log(dataForecast.data)
   console.log(dataForecast.data.current.temperature)
}

getWeather("São Paulo")

// teste(-23.5475,-46.63611)

// searchCity.addEventListener("input", (e) => {
//    console.log(e.target.value)
// })

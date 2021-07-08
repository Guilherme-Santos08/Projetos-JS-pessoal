const searchCity = document.getElementById("search")

async function getWeather(e) {
   const API_URL = `https://api.troposphere.io/place/name/${e}?token=bbce94d2cfc23aefd03a7346b49d6ae929c57ecc2644e3df2c`
   const res = await fetch(API_URL)
   const data = await res.json()

   const teste = (data.data[0])
   const {latitude, longitude} = teste

   const API_URL2 = `https://api.troposphere.io/forecast/${latitude},${longitude}?token=bbce94d2cfc23aefd03a7346b49d6ae929c57ecc2644e3df2c`
   const res2 = await fetch(API_URL2)
   const data2 = await res2.json()

   console.log(data2.data)
   console.log(data2.data.current.temperature)
}

getWeather("São Paulo")

// teste(-23.5475,-46.63611)

searchCity.addEventListener("input", (e) => {
   console.log(e.target.value)
})

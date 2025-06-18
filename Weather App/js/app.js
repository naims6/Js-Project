const apiKey = "3ba796cf1450e13ebf6ce29be1dd59db"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search-section input")
const searchBtn = document.querySelector(".search-section button")
const weatherIcon = document.querySelector(".weather-icon img")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data = await response.json()
   
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather-info").style.display = "none"
    } else {
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".wind-humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == 'Clouds') {
            weatherIcon.src = "./images/clouds.png"
        } else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "./images/clear.png"
        } else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "./images/rain.png"
        } else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "./images/drizzle.png"
        } else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "./images/mist.png"
        }


        document.querySelector(".weather-info").style.display = "block"
        document.querySelector(".error").style.display = "none"

        }
    
    
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value)
})
searchBox.addEventListener("keydown", (e) => {
    if(e.key == "Enter") {
        checkWeather(searchBox.value)
    }
})



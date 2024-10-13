
const apikey = "883204657ec403432a60d404265997bc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchbox = document.querySelector(".search input");
var searchbtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const respons = await fetch(apiUrl + city + `&appid=${apikey}`);

    if (respons.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"

    } else {
        var data = await respons.json();

        console.log(data);

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
        document.querySelector('.wind').innerHTML = data.wind.speed + " km/h ";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[1].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[2].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[3].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[4].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }


}

searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})


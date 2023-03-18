const apiKey = 'b5dab16d55e7bf52f4b19fcaffdfb8c8';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather-icon");

async function checkWeather (city) {
    const recive =  await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await recive.json()


    if (recive.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else {
        
    document.querySelector(".city").innerHTML = data.name ;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.png";
    }
    else if (data.weather[0].main == "Clear"){
        weatherImg.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Rain"){
        weatherImg.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherImg.src = "images/mist.png";
    }


    document.querySelector(".weather").style.display = "block"
        
    }



}


searchBtn.addEventListener("click" , () => {

    checkWeather (searchBox.value) 
})


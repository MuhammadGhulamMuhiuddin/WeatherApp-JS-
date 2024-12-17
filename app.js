var weather = document.getElementById("weather");
var city = document.getElementById("city");
var weatherIcon = document.getElementById("weather-icon");

function getWeather() {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=392fc470c1ac8b42b2f40951a9a96cc4&units=metric`
  )
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);

      var weatherCondition = data.weather[0].main.toLowerCase();

      weather.innerHTML = `
      <div class="icon-container">
        <img src="${getWeatherIcon(weatherCondition)}" alt="Weather Icon">
      </div>
      <h1 class="temp">${Math.round(data.main.temp)}°C</h1>
      <p class="city">${data.name}</p>
      <p class="description">${data.weather[0].main}</p>
      <div class="details">
        <p><img src="https://cdn-icons-png.flaticon.com/512/3104/3104614.png" alt="Wind"> Wind: ${data.wind.speed} km/h</p>
        <p><img src="https://cdn-icons-png.flaticon.com/512/578/578067.png" alt="Humidity"> Humidity: ${data.main.humidity}%</p>
        <p><img src="https://cdn-icons-png.flaticon.com/512/4828/4828855.png" alt="Haze"> ${weatherCondition}</p>
      </div>
    `;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getWeatherIcon(weatherMain) {
  if (weatherMain.includes("cloud")) {
    return "https://cdn-icons-png.flaticon.com/512/414/414927.png"; 
  } else if (weatherMain.includes("rain")) {
    return "https://cdn-icons-png.flaticon.com/512/1163/1163665.png";
  } else if (weatherMain.includes("clear")) {
    return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
  } else if (weatherMain.includes("haze")) {
    return "https://cdn-icons-png.flaticon.com/512/4828/4828855.png"
  } else {
    return "https://cdn-icons-png.flaticon.com/512/1163/1163665.png"; 
  }
}
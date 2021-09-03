const API_KEY = "ab79f471bdaf0806eef684966efffe3a";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const country = document.querySelector("#weather span:last-child");
      country.innerText = data.sys.country;
      weather.innerText = `${data.weather[0].main} / ${Math.round(
        data.main.temp
      )}℃`;
    });
}

function onGeoError() {
  alert("위치 에러");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

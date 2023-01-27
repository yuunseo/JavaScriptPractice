const API_KEY = "b3003de9d05dd46fc7294d92e27aaf59";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longtitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data =>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const cityContainer = document.querySelector("#weather span:last-child");

        cityContainer.innerText = data.name;
        weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError); //실행시 동작함수, 에러시 동작함수가 인자로 들어간다
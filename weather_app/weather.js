const apiKey = 'b632528d98f122bdf24478210c7ded9e';
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

const weather = document.querySelector('.weather-icon');


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if(response.status == 404){
      document.querySelector('.error').style.display = "block";
      document.querySelector('.temperature').style.display = "none";
    } else {
      document.getElementById('location').innerHTML = data.name;
      document.getElementById('temp').innerHTML = `${data.main.temp}°C`;
      document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`;
      document.querySelector('.wind').innerHTML = `${data.wind.speed}km/h`;
  
      if(data.weather[0].main == "Clouds"){
        weather.src = './img/clouds.png';
      } else if(data.weather[0].main == "Clear"){
        weather.src = './img/clear.png';
      } else if(data.weather[0].main == "Drizzle"){
        weather.src = './img/drizzle.png';
      } else if(data.weather[0].main == "Mist"){
        weather.src = './img/mist.png';
      } else if(data.weather[0].main == "Snow"){
        weather.src = './img/snow.png';
      } 
  
      document.querySelector('.temperature').style.display = "block";
      document.querySelector('.error').style.display = "none";

    }

    

}

searchBtn.addEventListener("click", () =>{
  checkWeather(search.value);
})

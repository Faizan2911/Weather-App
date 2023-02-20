let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
getWeatherData = (city) => {
    const URL = "https://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
    
   return  fetch(FULL_URL)
    .then(response => response.json())
    .then(data => data) 
}
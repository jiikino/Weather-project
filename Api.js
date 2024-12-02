function search(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let city = searchInput.value  // Get the city from the input field
    let apikey = "06cffcec970a84624ftfdo3fb2c867aa"; // api key 
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}`;
    axios.get(apiUrl).then(displayTemp);


}


function displayTemp (response){
    console.log(response);
    let city = response.data.city;
    let temperature = Math.round(response.data.temperature.current);
    let humidity = response.data.temperature.humidity;

    let cityElement = document.querySelector("h1");
    cityElement.innerHTML =`${city}`;

    let temperatureElement = document.querySelector("#current-temperature")
    temperatureElement.innerHTML = `${temperature}`;

    let humidityElement = document.querySelector("#current-humidity");
    humidityElement.innerHTML = `${humidity}%`;

} 

function formatDate(date) {
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let day = date.getDay();
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    if (hours < 10) {
      hours = `0${hours}`;
    }
  
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
  
    let formattedDay = days[day];
    return `${formattedDay} ${hours}:${minutes}`;
  }
 
  
  let currentDateELement = document.querySelector("#current-details");
  let currentDate = new Date();
  
  currentDateELement.innerHTML = formatDate(currentDate);


let form = document.querySelector("#search-input");
form.addEventListener ("submit", search);


  

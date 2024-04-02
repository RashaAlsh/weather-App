
// API key and  URL 

const apiKey= "8bc5ed78616784be678fa57286498bec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&lang=en"

// DOM elements
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button ")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    try{
        const response = await fetch(`${apiUrl}&q=${city}&appid=${apiKey}`);
        console.log(response);
        if (!response.ok){
            throw new Error ('unable to get weather data.');
        }
    
        const data = await response.json(); 
        console.log(data);

        // this will Update the weather information
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    
    const tempCelcius = Math.round(data.main.temp); 
    document.querySelector(".temp").innerHTML = tempCelcius + "°C";
    
    //  Update the weather icon 
    switch (data.weather[0].main){
    case "Clouds" :
        weatherIcon.src = "public/images/clouds.png"
        break
    case "Clear" :
        weatherIcon.src = "public/images/clear.png"
        break
    case "Drizzle":
        weatherIcon.src = "public/images/drizzle.png"
        break
    case "Rain" :
        weatherIcon.src = "public/images/rain.png"
    break
    case "Mist" :
        weatherIcon.src = "public/images/mist.png"
    break }

 // Display the weather section and hide error message
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".err").style.display = "none";

    } catch (error){
        document.querySelector(".err").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } };
    
    
    searchBtn.addEventListener("click", () => {
        const city = searchBox.value.trim();
        if (city !== "") {
    // Call checkWeather function with the entered city
        checkWeather(city);
        } });
    
     // default city 
    checkWeather("amsterdam");
    
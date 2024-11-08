
async function fetchweather(city) {
    // Replace with the city you want
    const url = `https://weather-api99.p.rapidapi.com/weather?city=${encodeURIComponent(city)}`;
    document.getElementById('cityName').innerText = city;
    
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '2cc513c109mshce5521978b666b9p1366bfjsn7a76a88d69c6',
            'x-rapidapi-host': 'weather-api99.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.json(); // Change to `.json()` if expecting JSON response
        show(result);
    } catch (error) {
        alert("Could not retrieve weather data. Please try again.");
    }
}

function show(result) {
    console.log(result);
    let temp = result.main.temp - 273.15;
    let feels_like = result.main.feels_like - 273.15;
    let temp_min = result.main.temp_min - 273.15;
    let temp_max = result.main.temp_max - 273.15;

    document.getElementById('temp').innerHTML = temp.toFixed(2) + "°C";
    document.getElementById('feels_like').innerHTML = feels_like.toFixed(2) + "°C";
    document.getElementById('temp_min').innerHTML = temp_min.toFixed(2) + "°C";
    document.getElementById('temp_max').innerHTML = temp_max.toFixed(2) + "°C";
    document.getElementById('pressure').innerHTML = result.main.pressure;
    document.getElementById('humidity').innerHTML = result.main.humidity;
    document.getElementById('sea_level').innerHTML = result.main.sea_level;
    document.getElementById('grnd_level').innerHTML = result.main.grnd_level;
    const sunriseTime = new Date(result.sys.sunrise * 1000);
    const sunsetTime = new Date(result.sys.sunset * 1000);
    document.getElementById('sunrise').innerHTML = sunriseTime.toLocaleTimeString();
    document.getElementById('sunset').innerHTML = sunsetTime.toLocaleTimeString();
}

document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault();
    const city = document.getElementById('city').value.trim();
    if (city) {
        fetchweather(city);
    } else {
        alert("Please enter a city name.");
    }
});
    fetchweather("Delhi");
    

    
    







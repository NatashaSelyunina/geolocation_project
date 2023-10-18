const headingCity = document.getElementById('headingCity')
const degrees = document.getElementById('degrees');
const wind = document.getElementById('wind');
const text = document.getElementById('text');

async function getWeather() {
    const result = await fetch('https://get.geojs.io/v1/ip/geo.json');
    const object = await result.json();
    const { region, city, latitude, longitude} = object;
    console.log(`${region}, ${city}, ${latitude}, ${longitude}`);
    console.log(object.region);
    console.log(latitude, longitude);

    const result2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const object2 = await result2.json();
    const {current_weather} = object2;
    const {temperature, windspeed, weathercode} = current_weather;
    const code = object2.current_weather.weathercode;
    console.log(city, current_weather.temperature, current_weather.windspeed, getWheather2(weathercode));
    headingCity.textContent = `${city}`;
    degrees.textContent = `${temperature}`;
    wind.textContent = `${windspeed}`;
    text.textContent = `${getWheather2(weathercode)}`;
}

getWeather();

function getWheather2(code) {
    switch(code) {
        case 0:
            return 'Clear sky';
        case 1:
        case 2:
        case 3:
            return 'Mainly clear, partly cloudy, and overcast';
        case 45:
        case 48:
            return 'Fog and depositing rime fog';
        case 51:
        case 53: 
        case 55:
            return 'Drizzle: Light, moderate, and dense intensity';
        case 56:
        case 57:
            return 'Freezing Drizzle: Light and dense intensity';
        case 61:
        case 63: 
        case 65:
            return 'Rain: Slight, moderate and heavy intensity';
        case 66:
        case 67: 
            return 'Freezing Rain: Light and heavy intensity';
        case 71:
        case 73:
        case 75:
            return 'Snow fall: Slight, moderate, and heavy intensity';
        case 77:
            return 'Snow grains';
        case 80:
        case 81: 
        case 82:
            return 'Rain showers: Slight, moderate, and violent';
        case 85:
        case 86:
            return 'Snow showers slight and heavy';
        case 95:
            return 'Thunderstorm: Slight or moderate';
        case 96:
        case 99:
            return 'Thunderstorm with slight and heavy hail';
        default:
            return 'Misstake';
    }
}




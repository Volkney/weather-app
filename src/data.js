const DEFAULT_CITY = 'Austin';
const apiKey = 'fa208223d3f04273939205811230309';

export default async function getWeather(cityName = DEFAULT_CITY) {
  try {
    // Request weather data
    const weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`);
    
    if (!weatherResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    
    return weatherData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

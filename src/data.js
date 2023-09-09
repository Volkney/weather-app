export default async function getWeather() {
  try {
    const cityInput = document.getElementById('city');
    const cityName = cityInput.value;
    const apiKey = 'fa208223d3f04273939205811230309';

    // Request weather data
    const weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`);
    
    if (!weatherResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await weatherResponse.json();
    console.log(weatherData.location.name);
    console.log(weatherData);
    // Clear the input field
    cityInput.value = '';

    return weatherData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

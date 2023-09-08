export default async function getWeather() {
  try {
    
    const response = await fetch('https://api.weatherapi.com/v1/current.json?key=fa208223d3f04273939205811230309&q=austin');

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const weatherData = await response.json();
    console.log(weatherData.location.name);
    return weatherData; // Returns data to allow other modules the use
  } catch (error) {
    console.error('An error occurred:', error);
  }
}





import { getWeekDay } from './weekDay';

export default async function weatherInfo(data) {
  try {
    // Current day
    const cityResult = document.getElementById('cityResult');
    cityResult.textContent = await data.location.name;

    const currentTemp = document.getElementById('currentTemp');
    currentTemp.textContent = await data.current.temp_f;

    const currentDay = document.getElementById('currentDay');
    currentDay.textContent = getWeekDay(data.forecast.forecastday[0].date);

    const currentHigh = document.getElementById('currentHigh');
    currentHigh.textContent = await data.forecast.forecastday[0].day.maxtemp_f;

    const currentLow = document.getElementById('currentLow');
    currentLow.textContent = await data.forecast.forecastday[0].day.mintemp_f;

    const currentCondition = document.getElementById('currentCondition');
    currentCondition.textContent = await data.forecast.forecastday[0].day.condition.text;

    const feelsLikeTemp = document.getElementById('feelsLikeTemp');
    feelsLikeTemp.textContent = await data.current.feelslike_f;

    const humidity = document.getElementById('humidity');
    humidity.textContent = await data.current.humidity;

    // Forecast for Day 1
    const forecastDay1 = document.getElementById('forecastDay1');
    forecastDay1.textContent = getWeekDay(data.forecast.forecastday[1].date);

    const forecastHigh1 = document.getElementById('forecastHigh1');
    forecastHigh1.textContent = await data.forecast.forecastday[1].day.maxtemp_f;

    const forecastLow1 = document.getElementById('forecastLow1');
    forecastLow1.textContent = await data.forecast.forecastday[1].day.mintemp_f;

    const forecastCondition1 = document.getElementById('forecastCondition1');
    forecastCondition1.textContent = await data.forecast.forecastday[1].day.condition.text;

    // Repeat the above pattern for Day 2 and Day 3
    // Forecast for Day 2
    const forecastDay2 = document.getElementById('forecastDay2');
    forecastDay2.textContent = getWeekDay(data.forecast.forecastday[2].date);

    const forecastHigh2 = document.getElementById('forecastHigh2');
    forecastHigh2.textContent = await data.forecast.forecastday[2].day.maxtemp_f;

    const forecastLow2 = document.getElementById('forecastLow2');
    forecastLow2.textContent = await data.forecast.forecastday[2].day.mintemp_f;

    const forecastCondition2 = document.getElementById('forecastCondition2');
    forecastCondition2.textContent = await data.forecast.forecastday[2].day.condition.text;

    // Forecast for Day 3
    const forecastDay3 = document.getElementById('forecastDay3');
    forecastDay3.textContent = getWeekDay(data.forecast.forecastday[3].date);

    const forecastHigh3 = document.getElementById('forecastHigh3');
    forecastHigh3.textContent = await data.forecast.forecastday[3].day.maxtemp_f;

    const forecastLow3 = document.getElementById('forecastLow3');
    forecastLow3.textContent = await data.forecast.forecastday[3].day.mintemp_f;

    const forecastCondition3 = document.getElementById('forecastCondition3');
    forecastCondition3.textContent = await data.forecast.forecastday[3].day.condition.text;
  } catch (err) {
    console.log('The error is: ', err);
  }
}

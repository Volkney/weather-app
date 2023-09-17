import { getWeekDay } from './weekDay';
import { getWeatherDescriptionByCode } from './weatherIcons';
import {getWeatherIconByCode} from './weatherIcons';

function setWeatherIconPath (element, conditionCode) {
    const iconPath = getWeatherIconByCode(conditionCode);
    const weatherIcon = require(`./images/svg/${iconPath}`);
    element.src = weatherIcon;
    element.alt = `${iconPath} icon`;
}

export default async function weatherInfo(data) {
  try {
    // Current day
    const cityResult = document.getElementById('cityResult');
    cityResult.textContent = await data.location.name;

    const currentTemp = document.getElementById('currentTemp');
    currentTemp.textContent = await data.current.temp_f;

    const currentDay = document.getElementById('currentDay');
    currentDay.textContent = getWeekDay(data.forecast.forecastday[0].date);
    const currentCondition = document.getElementById('currentCondition');
    currentCondition.textContent = await data.forecast.forecastday[0].day.condition.text;
    const currentConditionIcon = document.querySelector('.currentConditionIcon');
    setWeatherIconPath(currentConditionIcon, data.current.condition.code);
    
    const currentHigh = document.getElementById('currentHigh');
    currentHigh.textContent = await data.forecast.forecastday[0].day.maxtemp_f;

    const currentLow = document.getElementById('currentLow');
    currentLow.textContent = await data.forecast.forecastday[0].day.mintemp_f;

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

    const iconElements = [
        document.querySelector('.currentConditionIcon'),
        document.querySelector('.dayOneConditionIcon'),
        document.querySelector('.dayTwoConditionIcon'),
        document.querySelector('.dayThreeConditionIcon')
    ];
    
    /* Set up for weather condition */
    for (let i = 1; i <= 3; i++ ){
        const day = data.forecast.forecastday[i].day.code;

        setWeatherIconPath(day + `${i}` + conditionCode, day);

    }
    getWeatherDescriptionByCode();
} catch (err) {
    console.log('The error is: ', err);
  }
}

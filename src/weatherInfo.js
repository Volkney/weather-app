import { getWeekDay } from './weekDay';
import {getWeatherIconByCode} from './weatherIcons';
import LocationIConPath from './images/svg/location.svg';
import changeBackground  from './changeBackground';
import changeHourFormat from './changeHourFormat';

function setWeatherIconPath(element, conditionCode, hour) {
    const iconPath = getWeatherIconByCode(conditionCode, hour);
    element.src = iconPath; 
    element.alt = `${conditionCode}.svg`; 
}
export default async function weatherInfo(data) {
  try {

    const locationIcon = document.querySelector('.location');
    locationIcon.src = LocationIConPath;

    const cityResult = document.getElementById('cityResult');
    cityResult.textContent = await data.location.name;

    const currentTemp = document.getElementById('currentTemp');
    currentTemp.textContent = `${Math.round(data.current.temp_f)}°F`;

    const currentDay = document.getElementById('currentDay');
    currentDay.textContent = getWeekDay(data.forecast.forecastday[0].date);
    const currentCondition = document.getElementById('currentCondition');
    currentCondition.textContent = await data.current.condition.text;
    
   /*  const currentHigh = document.getElementById('currentHigh');
    currentHigh.textContent = await data.forecast.forecastday[0].day.maxtemp_f;

    const currentLow = document.getElementById('currentLow');
    currentLow.textContent = await data.forecast.forecastday[0].day.mintemp_f;

    const humidity = document.getElementById('humidity');
    humidity.textContent = await data.current.humidity; */
    const currentHour = document.getElementById('current-hour');
    let currentHourNumber = currentHour.textContent = data.location.localtime.split(" ")[1];

    //console.log(`I'm calling from weahter ${currentHourNumber}`)
    changeBackground(currentHourNumber);
    let hour = changeHourFormat(currentHourNumber);
    

    // Forecast for Day 1
    const forecastDay1 = document.getElementById('forecastDay1');
    forecastDay1.textContent = getWeekDay(data.forecast.forecastday[1].date);

    const forecastHigh1 = document.getElementById('forecastHigh1');
    forecastHigh1.textContent = `${Math.floor(data.forecast.forecastday[1].day.maxtemp_f)}°`;

    const forecastLow1 = document.getElementById('forecastLow1');
    forecastLow1.textContent = `${Math.floor(data.forecast.forecastday[1].day.mintemp_f)}°`;

    const forecastCondition1 = document.getElementById('forecastCondition1');
    forecastCondition1.textContent = (data.forecast.forecastday[1].day.condition.text);

    // Forecast for Day 2
    const forecastDay2 = document.getElementById('forecastDay2');
    forecastDay2.textContent = getWeekDay(data.forecast.forecastday[2].date);

    const forecastHigh2 = document.getElementById('forecastHigh2');
    forecastHigh2.textContent = `${Math.round(data.forecast.forecastday[2].day.maxtemp_f)}°`;

    const forecastLow2 = document.getElementById('forecastLow2');
    forecastLow2.textContent = `${Math.round(data.forecast.forecastday[2].day.mintemp_f)}°`;

    const forecastCondition2 = document.getElementById('forecastCondition2');
    forecastCondition2.textContent = data.forecast.forecastday[2].day.condition.text;


    const currentIconElement = document.querySelector('.currentConditionIcon');
    const conditionCodeCurrent = data.current.condition.code;
    setWeatherIconPath(currentIconElement, conditionCodeCurrent, hour);
    
    const dayOneIconElement = document.querySelector('.dayOneConditionIcon');
    const conditionCodeDayOne = data.forecast.forecastday[1].day.condition.code;
    setWeatherIconPath(dayOneIconElement, conditionCodeDayOne);

    const dayTwoIconElement = document.querySelector('.dayTwoConditionIcon');
    const conditionCodeDayTwo = data.forecast.forecastday[2].day.condition.code;
    console.log(conditionCodeDayTwo)
    setWeatherIconPath(dayTwoIconElement, conditionCodeDayTwo);
    
    
} catch (err) {
    console.log('The error is: ', err);
  }
}

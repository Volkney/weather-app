import { getWeatherIconByCode } from "./weatherIcons";

function setWeatherIconPath(element, conditionCode) {
    const iconPath = getWeatherIconByCode(conditionCode);
    element.src = iconPath; 
    element.alt = `${iconPath}.svg`; 
}

export default function createHourlyItem(data){
    const hourlyContainer = document.querySelector('.hourly-container');
    hourlyContainer.innerHTML = '';
    const cityLocalTime = data.location.localtime;
    const cityCurrentHour = parseInt(cityLocalTime.split(" ")[1].split(":")[0]);

    let hourApiPath = data.forecast.forecastday[0].hour
    for(let i = 0; i < hourApiPath.length; i++){
        const apiInitialPath = data.forecast.forecastday[0].hour[i];
        let currentConditions = apiInitialPath.condition.text;
        // Extract the current hour from the city's local time

        // Getting current time
        let apiHourTime = apiInitialPath.time;
        let hourOnly = apiHourTime.split(" ")[1]; // This split just the hour that we want

        // Check if the api hour matches the current hour
        if (parseInt(hourOnly.split(" ")[0]) === cityCurrentHour){
            hourOnly = "Now";
        }
        let currentTemp = apiInitialPath.temp_f;

        //console.log(`the Condition is ${currentConditions} for the hour: ${hourOnly}`);

        // Getting icons for the respective condition
        let conditionCode = apiInitialPath.condition.code;

        // Create a unique container for each hour
        const hourlyItem = document.createElement('div');
        hourlyItem.className = 'hourly-item';
        hourlyItem.id = `hourly-item${i}`;

        // Create elements to append to hourly container
        hourlyItem.innerHTML = `<span class= "hour"> ${hourOnly}</span>
        <span class= "hourly-item-container"><img src="" alt="${currentConditions}" class="condition-icon${i} hour-icon" /></span>
        <span class= "temp"> ${Math.round(currentTemp)}°F</span>`;
        hourlyContainer.appendChild(hourlyItem);

        const iconElement = document.querySelector(`.condition-icon${i}`);
        setWeatherIconPath(iconElement, conditionCode);
    }
  
}
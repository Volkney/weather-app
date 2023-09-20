import { getWeatherIconByCode } from "./weatherIcons";

function setWeatherIconPath (element, conditionCode) {
    const iconPath = getWeatherIconByCode(conditionCode);
    const weatherIcon = require(`./images/svg/${iconPath}`);
    element.src = weatherIcon;
    element.alt = `${iconPath} icon`;
}

export default function createHourlyItem(data){
    const hourlyContainer = document.querySelector('.hourly-container');
    let hourApiPath = data.forecast.forecastday[0].hour
    for(let i = 0; i < hourApiPath.length; i++){
        const apiInitialPath = data.forecast.forecastday[0].hour[i];
        let currentConditions = apiInitialPath.condition.text;
        let currentHour = apiInitialPath.time;
        let hourOnly = currentHour.split(" ")[1]; // This split just the hour that we want
        let currentTemp = apiInitialPath.temp_f;

        //console.log(`the Condition is ${currentConditions} for the hour: ${hourOnly} with the temperature of: ${currentTemp}°`);

        // Getting icons for the respective condition
        let conditionCode = apiInitialPath.condition.code;

        

        // Create a unique container for each hour
        const hourlyItem = document.createElement('div');
        hourlyItem.className = 'hourly-item';
        hourlyItem.id = `hourly-item${i}`;

        // Create elements to append to hourly container
        hourlyItem.innerHTML = `<span class= "hour"> ${hourOnly}</span>
        <img src="" alt="${currentConditions}" class="condition-icon${i} hour-icon" />
        <span class= "temp"> ${currentTemp}°</span>`;
        
        hourlyContainer.appendChild(hourlyItem);

        const iconElement = document.querySelector(`.condition-icon${i}`);
        setWeatherIconPath(iconElement, conditionCode);
    }
}
import { getWeatherIconByCode } from "./weatherIcons";
import changeHourFormat from './changeHourFormat';

function setWeatherIconPath(element, conditionCode, hour) {
    const iconPath = getWeatherIconByCode(conditionCode, hour);
    element.src = iconPath; 
    element.alt = `${iconPath}.svg`; 
}

function centerCurrentHour(hourlyContainer, cityCurrentHour) {
    const currentHourlyItem = hourlyContainer.querySelector(`#hourly-item${cityCurrentHour}`);
    if (!currentHourlyItem) return;

    const offset = (hourlyContainer.clientWidth / 2) - (currentHourlyItem.clientWidth / 2);
    hourlyContainer.scrollLeft = currentHourlyItem.offsetLeft - offset;
}

export default function createHourlyItem(data){
    const hourlyContainer = document.querySelector('.hourly-container');
    hourlyContainer.innerHTML = '';
    const cityLocalTime = data.location.localtime;
    const cityCurrentHour = parseInt(cityLocalTime.split(" ")[1].split(":")[0]);
    
    hourlyContainer.innerHTML = `<div id="image-track" data-mouse-down-at="0" data-prev-percentage="0"></div>`
    hourlyContainer.addEventListener('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.deltaY * 0.2; 
    });

    let hourApiPath = data.forecast.forecastday[0].hour
    for(let i = 0; i < hourApiPath.length; i++){
        const apiInitialPath = data.forecast.forecastday[0].hour[i];
        let currentConditions = apiInitialPath.condition.text;
        // Extract the current hour from the city's local time

        // Getting current time
        let apiHourTime = apiInitialPath.time;
        let hourOnly = apiHourTime.split(" ")[1]; // This split just the hour that we want
        let hour = changeHourFormat(hourOnly);
       
        let currentTemp = apiInitialPath.temp_f;

        //console.log(`the Condition is ${currentConditions} for the hour: ${hourOnly}`);

        // Getting icons for the respective condition
        let conditionCode = apiInitialPath.condition.code;

        // Create a unique container for each hour
        const hourlyItem = document.createElement('div');
        hourlyItem.className = 'hourly-item';
        hourlyItem.id = `hourly-item${i}`;

         // Check if the api hour matches the current hour
         if (parseInt(hourOnly.split(":")[0]) === cityCurrentHour){
            hourOnly = "Now";
            hourlyItem.classList.add('active');
        }

        // Create elements to append to hourly container
        
        hourlyItem.innerHTML = `
        <span class= "hour"> ${hourOnly}</span>
        <span class= "hourly-item-container"><img src="" alt="${currentConditions}" class="condition-icon${i} hour-icon" /></span>
        <span class= "temp"> ${Math.round(currentTemp)}°F</span>`;
        hourlyContainer.appendChild(hourlyItem);

        /* delete this after */

        let isDown = false;
        let startX;
        let scrollLeft;
        
        hourlyContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            hourlyContainer.classList.add('active-scroll');
            startX = e.pageX - hourlyContainer.offsetLeft;
            scrollLeft = hourlyContainer.scrollLeft;
          });

          hourlyContainer.addEventListener('mouseleave', () => {
            isDown = false;
            hourlyContainer.classList.remove('active-scroll');
          });
          hourlyContainer.addEventListener('mouseup', () => {
            isDown = false;
            hourlyContainer.classList.remove('active-scroll');
          });
          hourlyContainer.addEventListener('mousemove', (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - hourlyContainer.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            hourlyContainer.scrollLeft = scrollLeft - walk;
          });
        
        /* down to here */
        const iconElement = document.querySelector(`.condition-icon${i}`);
        setWeatherIconPath(iconElement, conditionCode, hour);
    }
    centerCurrentHour(hourlyContainer, cityCurrentHour);
}
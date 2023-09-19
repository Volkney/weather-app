
export default function createHourlyItem(data){
    const hourlyContainer = document.querySelector('.hourly-container');
    let hourApiPath = data.forecast.forecastday[0].hour
    for(let i = 0; i < hourApiPath.length; i++){
        const apiInitialPath = data.forecast.forecastday[0].hour[i];
        let currentConditions = apiInitialPath.condition.text;
        let currentHour = apiInitialPath.time;
        let hourOnly = currentHour.split(" ")[1]; // This split just the hour that we want
        let currentTemp = apiInitialPath.temp_f;

        console.log(`the Condition is ${currentConditions} for the hour: ${hourOnly} with the temperature of: ${currentTemp}°`);
    }
}
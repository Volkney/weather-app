import weatherConditions from './weatherCondition.json';

export function getWeatherDescriptionByCode(code) {
    for(let i = 0; i < weatherConditions.length ; i++){
        console.log(weatherConditions[i].day);
    }
    
    const condition = weatherConditions.find(item => item.code === code);
    if (condition) {
        return condition.day;
    } else {
        return 'Unknown';
    }
    
}

export function getWeatherIconByCode(code) {
    const iconMapping = {
        1000: "sunny.svg",
        1003: "partly-cloudy.svg",
        // etc for the rest of the code
    }

    if (iconMapping[code]) {
        return iconMapping[code];
    } else {
        return 'default-icon.svg'; // Return a default icon if the code doesn't match any in the mapping
    }
}
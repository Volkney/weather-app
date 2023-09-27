export default function changeHourFormat(currentHour){
    if (!currentHour || typeof currentHour !== 'string') {
        console.error('Invalid currentHour:', currentHour);
        return;
    }
    const hour =  parseInt(currentHour.split(":")[0], 10);
    if (isNaN(hour)) {
        console.error('Could not parse hour from:', currentHour);
        return;
    }
    console.log(`this is formatHour: ${hour}`)
    return hour;
}
export function getWeekDay(date) {
    let days =  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];
    //console.log(dayName);
    return dayName;
}

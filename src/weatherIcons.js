export function getWeatherIconByCode(code) {
    const iconMapping = {
        1000: "sunny.svg",
        1003: "partly-cloudy.svg",
        1006: "cloudy.svg",
        1009: "overcast.svg",
        1030: "fog.svg",
        1063: "patchy-rain-possible.svg",
        1066: "patchy-snow-possible.svg",
        1069: "sleet.svg",
        1072: "patchy-freezing-drizzle-possible.svg",
        1087: "thundery-outbreaks-possible.svg",
        1114: "blowing-snow.svg",
        1117: "blizzard.svg",
        1135: "fog.svg",
        1147: "fog.svg",
        1150: "patchy-light-drizzle.svg",
        1153: "light-drizzle.svg",
        1168: "light-drizzle.svg",
        1171: "light-drizzle.svg",
        1180: "light-drizzle.svg",
        1183: "light-rain.svg",
        1186: "moderate-rain-at-times.svg",
        1189: "moderate-rain-at-times.svg",
        1192: "moderate-rain-at-times.svg",
        1195: "moderate-rain-at-times.svg",
        1198: "light-freezing-rain.svg",
        1201: "light-freezing-rain.svg",
        1204: "sleet.svg",
        1207: "sleet.svg",
        1210: "sleet.svg",
        1213: "snow.svg",
        1216: "snow.svg",
        1219: "snow.svg",
        1222: "snow.svg",
        1225: "snow.svg",
        1237: "hail.svg",
        1240: "drizzle.svg",
        1243: "drizzle.svg",
        1246: "torrential-rain-shower.svg",
        1249: "sleet.svg",
        1252: "sleet.svg",
        1255: "sleet.svg",
        1258: "sleet.svg",
        1261: "sleet.svg",
        1264: "sleet.svg",
        1273: "patchy-light-rain-with-thunder.svg",
        1276: "patchy-light-rain-with-thunder.svg",
        1279: "patchy-light-rain-with-thunder.svg",
        1282: "patchy-light-rain-with-thunder.svg",
    }

    if (iconMapping[code]) {
        console.log(iconMapping[code]);
        return iconMapping[code];
    } else {
        return 'cloud-refresh.svg'; // Return a default icon if the code doesn't match any in the mapping
    }
}
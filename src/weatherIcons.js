import sunny from './images/svg/sunny.svg';
import partlyCloudy from './images/svg/cloudy.svg';
import cloudy from './images/svg/cloudy.svg';
import overcast from './images/svg/cloudy.svg';
import fog from './images/svg/cloudy.svg';
import patchyRainPossible from './images/svg/moderate-rain.svg';
import patchySnowPossible from './images/svg/blizzard.svg';
import sleet from './images/svg/sleet.svg';
import patchyFreezingDrizzlePossible from './images/svg/patchy-freezing-drizzle.svg';
import thunderyOutbreaksPossible from './images/svg/thundery-outbreaks-possible.svg';
import blowingSnow from './images/svg/blizzard.svg';
import blizzard from './images/svg/blizzard.svg';
import patchyLightDrizzle from './images/svg/patchy-freezing-drizzle.svg';
import lightDrizzle from './images/svg/patchy-freezing-drizzle.svg';
import lightRain from './images/svg/light-rain.svg';
import moderateRainAtTimes from './images/svg/moderate-rain.svg';
import lightFreezingRain from './images/svg/light-freezing-rain.svg';
import snow from './images/svg/blizzard.svg';
import hail from './images/svg/blizzard.svg';
import torrentialRainShower from './images/svg/patchy-freezing-drizzle.svg';
import patchyLightRainWithThunder from './images/svg/thundery-outbreaks-possible.svg';
import cloudRefresh from './images/svg/cloud-refresh.svg';  // Default fallback icon


export function getWeatherIconByCode(code) {
    const iconMapping = {
        1000: sunny,
        1003: partlyCloudy,
        1006: cloudy,
        1009: overcast,
        1030: fog,
        1063: patchyRainPossible,
        1066: patchySnowPossible,
        1069: sleet,
        1072: patchyFreezingDrizzlePossible,
        1087: thunderyOutbreaksPossible,
        1114: blowingSnow,
        1117: blizzard,
        1135: fog,
        1147: fog,
        1150: patchyLightDrizzle,
        1153: lightDrizzle,
        1168: lightDrizzle,
        1171: lightDrizzle,
        1180: lightDrizzle,
        1183: lightRain,
        1186: moderateRainAtTimes,
        1189: moderateRainAtTimes,
        1192: moderateRainAtTimes,
        1195: moderateRainAtTimes,
        1198: lightFreezingRain,
        1201: lightFreezingRain,
        1204: sleet,
        1207: sleet,
        1210: sleet,
        1213: snow,
        1216: snow,
        1219: snow,
        1222: snow,
        1225: snow,
        1237: hail,
        1240: lightDrizzle,
        1243: lightDrizzle,
        1246: torrentialRainShower,
        1249: sleet,
        1252: sleet,
        1255: sleet,
        1258: sleet,
        1261: sleet,
        1264: sleet,
        1273: patchyLightRainWithThunder,
        1276: patchyLightRainWithThunder,
        1279: patchyLightRainWithThunder,
        1282: patchyLightRainWithThunder,
    }

    if (iconMapping[code]) {
        return iconMapping[code];
    } else {
        return cloudRefresh; // Return a default icon if the code doesn't match any in the mapping
    }
}

"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["data"],{

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeather)
/* harmony export */ });
const DEFAULT_CITY = 'Austin';
const apiKey = 'fa208223d3f04273939205811230309';

async function getWeather(cityName = DEFAULT_CITY) {
  try {
    // Request weather data
    const weatherResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${cityName}&days=5`);
    
    if (!weatherResponse.ok) {
      throw new Error('Network response was not ok');
    }

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    
    return weatherData;
  } catch (error) {
    console.error('An error occurred:', error);
  }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/data.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsMkZBQTJGLE9BQU8sS0FBSyxTQUFTO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgREVGQVVMVF9DSVRZID0gJ0F1c3Rpbic7XG5jb25zdCBhcGlLZXkgPSAnZmEyMDgyMjNkM2YwNDI3MzkzOTIwNTgxMTIzMDMwOSc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoY2l0eU5hbWUgPSBERUZBVUxUX0NJVFkpIHtcbiAgdHJ5IHtcbiAgICAvLyBSZXF1ZXN0IHdlYXRoZXIgZGF0YVxuICAgIGNvbnN0IHdlYXRoZXJSZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0ke2FwaUtleX0mcT0ke2NpdHlOYW1lfSZkYXlzPTVgKTtcbiAgICBcbiAgICBpZiAoIXdlYXRoZXJSZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIFxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
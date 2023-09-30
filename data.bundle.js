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
    const lolApi = await fetch ('RGAPI-940d23c1-f91f-4e80-8d0e-2e4c32a056c7');
    console.log(lolApi);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0EsMkZBQTJGLE9BQU8sS0FBSyxTQUFTO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBERUZBVUxUX0NJVFkgPSAnQXVzdGluJztcbmNvbnN0IGFwaUtleSA9ICdmYTIwODIyM2QzZjA0MjczOTM5MjA1ODExMjMwMzA5JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5TmFtZSA9IERFRkFVTFRfQ0lUWSkge1xuICB0cnkge1xuICAgIC8vIFJlcXVlc3Qgd2VhdGhlciBkYXRhXG4gICAgY29uc3Qgd2VhdGhlclJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PSR7YXBpS2V5fSZxPSR7Y2l0eU5hbWV9JmRheXM9NWApO1xuICAgIGNvbnN0IGxvbEFwaSA9IGF3YWl0IGZldGNoICgnUkdBUEktOTQwZDIzYzEtZjkxZi00ZTgwLThkMGUtMmU0YzMyYTA1NmM3Jyk7XG4gICAgY29uc29sZS5sb2cobG9sQXBpKTtcbiAgICBpZiAoIXdlYXRoZXJSZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHdlYXRoZXJSZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpO1xuICAgIFxuICAgIHJldHVybiB3ZWF0aGVyRGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdBbiBlcnJvciBvY2N1cnJlZDonLCBlcnJvcik7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
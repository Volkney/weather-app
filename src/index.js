import _ from 'lodash';
import getWeather from './data';
import './style.css';
import weatherInfo from './weatherInfo';
import createHourlyItem from './generateHourItems';
import setFavicon from './setFavicon';
import { fadeOutLoaders } from './loader'
async function main(){
  // Load the default city's weather when the app starts
  const defaultData = await getWeather();
  weatherInfo(defaultData);
  createHourlyItem(defaultData);

  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('city');

  form.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const cityName = cityInput.value;
    
    try {
      const data = cityName ? await getWeather(cityName) : await getWeather();
      weatherInfo(data);
      createHourlyItem(data);
      cityInput.value = '';
    } catch (error) {
      alert(`${cityName} was not found`); // Handling error for cities not found
    }
  });
  
}

document.addEventListener("DOMContentLoaded", function() {
  main();
  setFavicon();
});

window.addEventListener('load', function(){
  fadeOutLoaders();
  document.querySelector("main").style.display = "flex";
})

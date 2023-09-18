import _ from 'lodash';
import getWeather from './data';
import './style.css';
import weatherInfo from './weatherInfo';

async function main(){
  // Load the default city's weather when the app starts
  const defaultData = await getWeather();
  weatherInfo(defaultData);

  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('city');

  form.addEventListener('submit', async(event)=>{
    event.preventDefault();
    const cityName = cityInput.value;
    const data = cityName ? await getWeather(cityName) : await getWeather();
    weatherInfo(data);
    cityInput.value = '';
  });
}

document.addEventListener("DOMContentLoaded", function() {
  main();
});

import _ from 'lodash';
import getWeather from './data';
import './style.css';
import weatherInfo from './weatherInfo';
import { getWeatherDescriptionByCode } from './weatherIcons';
async function main(){
  const form = document.getElementById('weatherForm')
  form.addEventListener('submit', async(event)=>{
    event.preventDefault();
  try {
    const data = await getWeather();
    //console.log(data);
    weatherInfo(data);
    const code = 1000;
    console.log(`Weather condition for code ${code}: ${getWeatherDescriptionByCode(code)}`);
  }
  catch (error){
    console.error('An error has ocurred: ', error)
    }  
  });
}
main();
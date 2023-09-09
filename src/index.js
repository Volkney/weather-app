import _ from 'lodash';
import getWeather from './data';
import './style.css';
import weatherInfo from './weatherInfo';
async function main(){
  const form = document.getElementById('weatherForm')
  form.addEventListener('submit', async(event)=>{
    event.preventDefault();
  try {
    const data = await getWeather();
    //console.log(data);
    weatherInfo(data);
  }
  catch (error){
    console.error('An error has ocurred: ', error)
    }  
  });
}
main();
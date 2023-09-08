import _ from 'lodash';
import getWeather from './data';
import './style.css';

async function main(){

  try {
    const data = await getWeather();
    console.log(data);
  }
  catch (error){
    console.error('An error has ocurred: ', error)
  }  
}
main();
import _ from 'lodash';
import printMe from './print';
import './style.css';
function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   element.classList.add('hello');
 
    return element;
  }
  
  document.body.appendChild(component());
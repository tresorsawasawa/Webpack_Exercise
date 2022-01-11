import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './favicon.png';

 function component() {
   const element = document.createElement('div');
   const title = document.createElement('h1');
   const btn = document.createElement('button');
   element.classList.add('container')
   title.innerHTML = _.join(['Hello', 'webpack'], ' ');

   btn.innerHTML = 'Click me and check the console!';
   btn.onclick = printMe;

   element.append(title, btn);

    return element;
 }

 document.body.appendChild(component());
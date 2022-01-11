import _ from 'lodash';

 function component() {
  const element = document.createElement('h1');
  let arr = ['Hello', 'webpack'];

  element.innerHTML = _.join(arr, ' ');

  return element;
 }

 document.body.appendChild(component());
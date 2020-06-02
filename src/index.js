import './main.scss';
import Icon from './assets/icon.png';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello webpack';
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.style.maxWidth = '100px';

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

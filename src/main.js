import './main.scss';
import _ from 'lodash';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = 'Hello webpack';
  element.innerHTML = _.join(['Hello', 'World', 'from', 'webpack'], ' ');
  element.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = 'assets/icon.png';
  myIcon.style.maxWidth = '100px';

  btn.innerHTML = 'Click me and check the console!';

  element.appendChild(btn);
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

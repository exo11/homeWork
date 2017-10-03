'use strict';

const container = document.getElementsByClassName('container')[0],
  script = document.createElement('script');
script.src = "https://neto-api.herokuapp.com/twitter/jsonp?jsonp=addElements";
document.body.appendChild(script);


window.addElements = function(obj) {
  for (let key in obj) {
    if (key === 'wallpaper' || key === 'pic') {
      container.querySelector(`[data-${key}]`).src = obj[key];
    } else {
      container.querySelector(`[data-${key}]`).textContent = obj[key];
    }
  }
}
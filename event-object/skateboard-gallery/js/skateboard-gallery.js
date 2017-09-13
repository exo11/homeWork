'use strict';

const view = document.getElementById('view'),
  links = document.getElementById('nav').getElementsByTagName('a');

for (let photo of links) {

  photo.addEventListener('click', event => {
    event.preventDefault();
    view.src = photo.href;

    for (let item of links) {
      item.classList.remove('gallery-current');
    }

    photo.classList.add('gallery-current');

  });

}
'use strict';

const wrapper = document.getElementsByClassName('wrapper')[0],
  title = wrapper.querySelector('[data-title]'),
  ingridients = wrapper.querySelector('[data-ingredients]'),
  pic = wrapper.querySelector('[data-pic]'),
  rating = wrapper.querySelector('[data-rating]'),
  votes = wrapper.querySelector('[data-votes]'),
  star = wrapper.querySelector('[data-star]'),
  consumers = wrapper.querySelector('[data-consumers]');

function loadData(url, functionName) {
  const script = document.scripts[0].cloneNode();
  script.src = `${url}?jsonp=${functionName}`;
  document.body.appendChild(script);
}

window.addElements = function(obj) {
  title.textContent = obj.title;
  pic.style.backgroundImage = `url(${obj.pic})`;
  ingridients.textContent = obj.ingredients.join();
}

window.addRating = function(obj) {
  rating.textContent = obj.rating.toFixed(2);
  votes.textContent = `(${obj.votes} оценок)`;
  star.style.width = `${obj.rating * 10}%`;
}

window.addConsumers = function(obj) {
  consumers.innerHTML = obj.consumers.reduce((sum, item) => {
    return sum +
      `<img src=${item.pic} title=${item.name}>`
  }, '') + `<span>(+${obj.total})</span>`;
}

loadData('https://neto-api.herokuapp.com/food/42', 'addElements');
loadData('https://neto-api.herokuapp.com/food/42/rating', 'addRating');
loadData('https://neto-api.herokuapp.com/food/42/consumers', 'addConsumers');


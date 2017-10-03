'use strict';

const content = document.getElementsByClassName('content')[0],
  badgescard = document.getElementsByClassName('badgescard')[0];

function loadData(url) {
  const functionName = randName();
  return new Promise((done, fail) => {
    window[functionName] = done;
    const script = document.scripts[0].cloneNode();
    script.src = `${url}?jsonp=${functionName}`;
    document.body.appendChild(script);
  });
}

function randName() {
  return 'callback' + Math.random().toString().slice(2, 6);
}

function addElements(obj) {
  for (let key in obj) {
    if (key === 'pic') {
      content.querySelector(`[data-${key}]`).src = obj[key];
    } else if (key !== 'id') {
      content.querySelector(`[data-${key}]`).textContent = obj[key];
    }
  }
}

function addTechnologies(arr) {
  badgescard.innerHTML = arr.reduce((sum, item) => {
    return sum +
      `<span class="devicons devicons-${item}"></span>`
  }, '');
}

loadData('https://neto-api.herokuapp.com/profile/me')
  .then(obj => {
    addElements(obj);
    return loadData(`https://neto-api.herokuapp.com/profile/${obj.id}/technologies`);
  })
  .then(arr => {
    addTechnologies(arr);
    content.style.display = 'initial';
  });
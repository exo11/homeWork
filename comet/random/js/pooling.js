'use strict';
const arrP = document.getElementsByClassName('pooling')[0].querySelectorAll('div');

setInterval(() => {
  fetch('https://neto-api.herokuapp.com/comet/pooling')
    .then(res => {
      if (200 <= res.status && res.status < 300) {
        return res.text();
      }
      throw new Error(response.statusText);
    })
    .then(res => changeClass(res, arrP))
    .catch(error => console.log(error.message));
}, 5000);

function changeClass(data, arr) {
  arr.forEach(div => {
    div.textContent === data ? div.classList.add('flip-it') :
      div.classList.remove('flip-it');
  });
}
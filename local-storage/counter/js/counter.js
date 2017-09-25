'use strict';

const wrap = document.getElementsByClassName('wrap')[0];
counterClick(wrap);

function counterClick(container) {
  const counter = document.getElementById('counter'),
    btnWrap = container.getElementsByClassName('wrap-btns')[0];
  let count = localStorage.count === undefined ? 0 : localStorage.count;
  counter.textContent = count;

  btnWrap.addEventListener('click', handlerBtnCounter);

  function handlerBtnCounter(event) {
    if (event.target.id === 'increment') {count++}
    if (event.target.id === 'decrement' && count > 0) {count--}
    if (event.target.id === 'reset') {count = 0}
    localStorage.count = counter.textContent = count;
  }
}
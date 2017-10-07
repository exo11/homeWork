'use strict';

const canvas = document.getElementsByTagName('canvas')[0],
  PI = Math.PI,
  ctx = canvas.getContext('2d'),
  arr = ['#ffffff', '#ffe9c4', '#d4fbff'];

canvas.setAttribute('width', '1000');
canvas.setAttribute('height', '1000');

starField();

canvas.addEventListener('click', starField);

function starField() {
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1000, 1000);
  for (let i = 0; i < random(200, 400); i++) {
    ctx.fillStyle = arr[random(1, 3) - 1];
    ctx.beginPath();
    ctx.arc(random(0, 998), random(0, 998), Math.random() + 0.1, 0, 2 * PI);
    ctx.globalAlpha = Math.random() * (1 - 0.8) + 0.8;
    ctx.fill();
  }
}

function random(min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  result = Math.round(result);
  return result;
}
'use strict';

const canvas = document.getElementById('wall'),
  PI = Math.PI,
  ctx = canvas.getContext('2d'),
  arrObj = createArrObj();

canvas.setAttribute('width', window.screen.width);
canvas.setAttribute('height', window.screen.height);

function createArrObj() {
  let arr = [],
    length = random(50, 200) * 2;
  for (let i = 0; i < length; i++) {
    let coinFlip = random(0, 100),
      obj = {
        x: random(0, window.screen.width),
        y: random(0, window.screen.height),
        size: Math.random() * (0.6 - 0.1) + 0.1,
        speed: Math.random() * (0.2 + 0.2) - 0.2
      };
    obj.func = coinFlip > 50 ? nextPoint1 : nextPoint2;
    obj.rotate = obj.speed;
    arr.push(obj);
  }
  return arr;
}

setInterval(() => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  arrObj.map((obj, i) => {
    let x = obj.func(obj.x, obj.y, Date.now()).x,
      y = obj.func(obj.x, obj.y, Date.now()).y;
    ctx.beginPath();
    ctx.strokeStyle = 'white';
    ctx.lineWidth = obj.size * 5;
    if (i % 2) {
      ctx.arc(x, y, obj.size * 12, 0, 2 * PI);
      ctx.stroke();
    } else {
      ctx.translate(x, y);
      ctx.rotate(obj.rotate);
      ctx.moveTo(0, 0);
      ctx.lineTo(0, 20 * obj.size);
      ctx.lineTo(0, -20 * obj.size);
      ctx.moveTo(0, 0);
      ctx.lineTo(-20 * obj.size, 0);
      ctx.lineTo(20 * obj.size, 0);
      ctx.stroke();
      ctx.resetTransform();
      obj.rotate += obj.speed;
      obj.rotate = obj.rotate > 6.28 ? obj.speed : obj.rotate;
    }
  });
}, 50);

function random(min, max) {
  let result = min - 0.5 + Math.random() * (max - min + 1);
  result = Math.round(result);
  return result;
}

function nextPoint1(x, y, time) {
  return {
    x: x + Math.sin((50 + x + (time / 10)) / 100) * 3,
    y: y + Math.sin((45 + x + (time / 10)) / 100) * 4
  };
}

function nextPoint2(x, y, time) {
  return {
    x: x + Math.sin((x + (time / 10)) / 100) * 5,
    y: y + Math.sin((10 + x + (time / 10)) / 100) * 2
  }
}
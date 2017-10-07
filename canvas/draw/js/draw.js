'use strict';

const canvas = document.getElementById('draw'),
  ctx = canvas.getContext('2d');
let action = 'up',
  points = [],
  nextcolor = 0,
  nextwidth = 100,
  nextpoint,
  pointer,
  px = -1;

canvas.setAttribute('width', window.screen.width);
canvas.setAttribute('height', window.screen.height);

canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseout', mouseUp);
canvas.addEventListener('dblclick', windowResize);
window.addEventListener('resize', windowResize);


function mouseDown(event) {
  if (event.which === 1) {
    action = 'down';
    points[0] = [event.pageX, event.pageY];
    pointer = 0;
  }
};

function mouseUp(event) {
  if (event.which === 1) {
    points = [];
    action = 'up';
  }
};

function mouseMove(event) {
  if (action == 'down' && event.which === 1) {
    nextpoint = pointer + 1;
    if (nextpoint > 19) {
      nextpoint = 0;
      /*Привязал интервал изменения цвета и толщины линии к моменту перезаписи массива,
    потому как не до конца понял ,что означает 'тик' в данном тз)*/
      changeWidth();
      if (event.shiftKey) {
        nextcolor--;
        nextcolor = nextcolor < 1 ? 361 : nextcolor;
      } else {
        nextcolor++;
        nextcolor = nextcolor > 359 ? 0 : nextcolor;
      }
    }
    ctx.strokeStyle = `hsl(${nextcolor}, 100%, 50%)`;
    ctx.beginPath();
    ctx.lineJoin = ctx.lineCap = 'round';
    ctx.moveTo(points[pointer][0], points[pointer][1]);
    ctx.lineTo(event.pageX, event.pageY);
    ctx.stroke();
    pointer = nextpoint;
    points[pointer] = [event.pageX, event.pageY];
  }
};

function changeWidth() {
  nextwidth += px;
  ctx.lineWidth = nextwidth;
  px = nextwidth === 5 ? 1 : nextwidth === 100 ? -1 : px;
}

function windowResize() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
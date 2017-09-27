'use strinct';

const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

connection.addEventListener('open', () => showBubbles(connection));

document.addEventListener('click', event => {
  let obj = { x: event.pageX.toString(), y: event.pageY.toString() };
  connection.send(JSON.stringify(obj));
});

window.addEventListener('beforeunload', () => {
  connection.close();
});
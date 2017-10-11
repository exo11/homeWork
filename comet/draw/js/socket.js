'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/draw');

editor.addEventListener('update', handlerEditor);

function handlerEditor(event) {
  event.canvas.toBlob(blob => {connection.send(blob)});
}
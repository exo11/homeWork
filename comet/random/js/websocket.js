'use strict';

const ws = new WebSocket ('wss://neto-api.herokuapp.com/comet/websocket'),
arrW = document.getElementsByClassName('websocket')[0].querySelectorAll('div');

ws.addEventListener('message', event => {changeClass(event.data, arrW)});


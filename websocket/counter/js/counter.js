'use strict';

const counter = document.getElementsByClassName('counter')[0],
  errors = document.getElementsByClassName('errors')[0],
  connection = new WebSocket('wss://neto-api.herokuapp.com/counter');

connection.addEventListener('message', event => { 
	let obj = (JSON.parse(event.data));
	counter.textContent = obj.connections;
	errors.textContent = obj.errors;
}); 

window.addEventListener('beforeunload', () => { 
  connection.close(1000, 'Работа закончена');
});
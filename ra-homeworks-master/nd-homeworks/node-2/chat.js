"use strict"

const EventEmitter = require('events');

class ChatApp extends EventEmitter {
  /**
   * @param {String} title
   */
  constructor(title, text, time) {
    super();
	this.title = title;
	this.text = text;
	this.time = time;
	this.interval = setInterval(() => {
      this.emit('message', `${this.title}: ping-pong`);
    }, 1000);
  }

  close() {
    clearInterval(this.interval);
    this.emit('close');
    this.removeListener('message', chatOnMessage);
  }
}

let webinarChat = new ChatApp('webinar', 'закрываю вебинар', 30000),
  facebookChat = new ChatApp('=========facebook', 'Закрываю фейсбук, все внимание — вебинару!', 15000),
  vkChat = new ChatApp('---------vk', 'Закрываю вконтакте...', 10000);

const chatOnMessage = message => {console.log(message)},
  preAnswer = () => {console.log('Готовлюсь к ответу')};

function chatClose(chat, text, time) {
  setTimeout(() => {
    console.log(text);
    chat.close();
  }, time);
}

const chatArr = [
  vkChat,
  facebookChat,
  webinarChat
];

chatArr.forEach(chat => {chat.on('message', chatOnMessage)});
webinarChat.on('message', preAnswer);
vkChat.on('message', preAnswer);
vkChat.setMaxListeners(2);
vkChat.once('close', () => console.log('Чат вконтакте закрылся :('));
chatArr.forEach(chat => {chatClose(chat, chat.text, chat.time)});

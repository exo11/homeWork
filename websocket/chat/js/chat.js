'use strict'

const chat = document.getElementsByClassName('chat')[0];

chats(chat);

function chats(container) {
  const connection = new WebSocket('wss://neto-api.herokuapp.com/chat'),
    chatStatus = container.getElementsByClassName('chat-status')[0],
    messageSubmit = container.getElementsByClassName('message-submit')[0],
    messageStatus = container.getElementsByClassName('message-status')[0],
    messageStatusText = messageStatus.getElementsByClassName('message-text')[0],
    messagesContent = container.getElementsByClassName('messages-content')[0],
    messageLoading = container.getElementsByClassName('loading')[0],
    message = container.getElementsByClassName('message')[1],
    messageText = message.getElementsByClassName('message-text')[0],
    messageTime = message.getElementsByClassName('timestamp')[0],
    messagePersonal = container.getElementsByClassName('message-personal')[0],
    messagePersonalText = messagePersonal.getElementsByClassName('message-text')[0],
    messagePersonalTime = messagePersonal.getElementsByClassName('timestamp')[0],
    messageInput = container.getElementsByClassName('message-input')[0];


  connection.addEventListener('open', () => {
    chatStatus.textContent = chatStatus.dataset.online;
    messageSubmit.removeAttribute('disabled');
    messageStatusText.textContent = 'Пользователь появился в сети';
    messagesContent.appendChild(messageStatus.cloneNode(true));
  });

  connection.addEventListener('message', event => {
    if (event.data !== '...') {
      messageText.textContent = event.data;
      messageTime.textContent = new Date().toTimeString().slice(0, 5);
      messagesContent.appendChild(message.cloneNode(true));
      messagesContent
        .removeChild(messagesContent.getElementsByClassName('loading')[0]);
    } else {
      messagesContent.appendChild(messageLoading.cloneNode(true));
    }
  });

  connection.addEventListener('close', event => {
    chatStatus.textContent = chatStatus.dataset.offline;
    messageSubmit.setAttribute('disabled', 'disabled');
    messageStatusText.textContent = 'Пользователь не в сети';
    messagesContent.appendChild(messageStatus.cloneNode(true));
  });

  messageSubmit.addEventListener('click', addMessage);

  messageInput.addEventListener('keydown', event => {
    if (event.code === 'Enter') {
      addMessage;
    }
  });

  window.addEventListener('beforeunload', () => {
    connection.close();
  });


  function addMessage(event) {
    if (messageInput.value !== '') {
      connection.send(messageInput.value);
      messagePersonalText.textContent = messageInput.value;
      messagePersonalTime.textContent = new Date().toTimeString().slice(0, 5);
      messagesContent.appendChild(messagePersonal.cloneNode(true));
      messageInput.value = '';
    }
  }
}
const chatRoom = require('./chatroom.js');

const chat = new chatRoom();

chat.on('join', (user) => {
  console.log(`${user} has joined the chat`);
});

chat.on('message', (user, message) => {
  console.log(`${user} : ${message}`);
});

chat.on('leave', (user) => {
  console.log(`${user} has left the chat`);
});

// simulate the chat
chat.join('John');
chat.join('Doe');

chat.sendMessage('John', 'hey Doe, Hello to everyone');
chat.sendMessage('Doe', 'hey John, Hello to everyone');

chat.leave('John');
chat.sendMessage('John', "Message wouldn't be sent");
chat.leave('Doe');

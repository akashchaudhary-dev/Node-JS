const EventEmitter = require('node:events');

class Chat extends EventEmitter {
  sendMessage(msg) {
    console.log(`Message sent: ${msg}`);
    this.emit('messageRecieved', msg);
  }
}

// Event
const chat = new Chat();

// Event listner
chat.on('messageRecieved', (msg) => {
  console.log(`New Message: ${msg}`);
});

// Emit event
chat.emit('messageRecieved', 'Hello');

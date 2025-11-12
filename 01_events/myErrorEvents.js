const EventEmmiter = require('node:events');

// Event
const eventEmitter = new EventEmmiter();

// Event listner
eventEmitter.on('error', (err) => {
  console.error(`Error occurred: ${err.message}`);
})

// Emit event
eventEmitter.emit('error', new Error('Something went wrong!'));

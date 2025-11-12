const EventEmitter = require('events');

// Define/create an event
const eventEmitter = new EventEmitter();

// Event listner 1
eventEmitter.on('greet', (username) => {
  console.log(`Hello ${username}!!`);
})

// Event listner 2
eventEmitter.once('notification', () => {
  console.log('This event will run only once!!');
})

// Emit the event
eventEmitter.emit('greet', 'Akash');
eventEmitter.emit('notification');
eventEmitter.emit('notification');

// Event listner 3
const myListner = () => console.log("I'm a test listner");
eventEmitter.on('test', myListner);
eventEmitter.emit('test');
eventEmitter.removeListener('test', myListner);
eventEmitter.emit('test');

// count the number of listner on a event
console.log(eventEmitter.listeners('test'));
console.log(eventEmitter.listeners('greet'));
console.log(eventEmitter.listeners('notification'));



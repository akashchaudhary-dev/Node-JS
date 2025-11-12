const fs = require('node:fs'); // built-in module

const content = fs.readFileSync('./data.txt', 'utf-8');

console.log(content);

const fs = require('node:fs');

// Task : Read the contents of the notes.txt
console.log('Start of Script');

// Sync => Blocking Operations
const contents = fs.readFileSync('notes.txt', 'utf-8');
console.log('Contents', contents);

console.log('End of Script');
const { Buffer } = require('node:buffer');

// Creates a zero-filled Buffer of length 5
const buff1 = Buffer.alloc(5);
// console.log(buff1);
// console.log(buff1[0]);

const buff2 = Buffer.from('Hello World!');
// console.log(buff2);
// console.log(buff2.toString());

const buff3 = Buffer.allocUnsafe(100);
// console.log(buff3);
// console.log(buff3.toString());

const buff4 = Buffer.alloc(10);
// buff1.write('Hello');
// console.log(buff1.toString());

const buff5 = Buffer.from('Hello from me!');
// console.log(buff5.toString());
// console.log(buff5.toString('utf-8', 0, 5));

const buff6 = Buffer.from('Hello');
// buff6[0] = 0x4A;
// console.log(buff6);
// console.log(buff6.toString());

const buff7 = Buffer.from('Hello');
const buff8 = Buffer.from('World');

const merged = Buffer.concat([buff7, buff8]);
console.log(merged.toString());
console.log(merged.length);



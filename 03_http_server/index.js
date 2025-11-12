const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
  const path = req.url;
  const method = req.method;

  const log = `\n${Date.now()} : ${method} : ${path}`;
  fs.appendFileSync('log.txt', log, 'utf-8');

  switch (method) {
    case 'GET': {
      switch (path) {
        case '/':
          return res.writeHead(200).end('Hello!');
        case '/contact-us':
          return res.writeHead(200).end('email: jellog@gmail.com, contact: 9999999999');
        case '/tweet':
          return res.writeHead(200).end("Here's your tweet!");
      }
    }
      break;
    case 'POST': {
      switch (path) {
        case '/tweet':
          return res.writeHead(201).end('Tweet Created!');
      }
    }

  }
  return res.writeHead(404).end('Path not found!');
});

server.listen(8000, () => {
  console.log(`Server is running on PORT ${8000}`);
})

const express = require('express');

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.end('Homepage');
})

app.get('/contact-us', (req, res) => {
  res.end('You can contact me at xyz@gmail.com');
})

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
})

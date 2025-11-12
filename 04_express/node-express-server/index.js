const express = require('express');

const app = express();
const port = 8000;

// In Memory Database
const books = [
  { id: 1, title: "Book One", author: "Author One" },
  { id: 2, title: "Book Two", author: "Author Two" }
];

// Middlewares
app.use(express.json());

// Routes
app.get('/books', (req, res) => {
  res.setHeader('x-aka', 'akash'); // custom header - always prefix with x
  return res.status(200).json(books);
})

app.get('/book/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.end('Invalid book id');
  }

  const book = books.find(b => b.id === id);

  if (!book) {
    return res.status(404).send({ message: "book not found" });
  }

  return res.status(200).send(book);
})

app.post('/book', (req, res) => {
  console.log(req);
  const { title, author } = req.body;

  if (!title || title === '') {
    return res.status(400).json({ error: 'title is required' });
  }

  if (!author || author === '') {
    return res.status(400).json({ error: 'author is required' });
  }

  const id = books.length + 1;
  console.log(id);
  const book = { id, title, author };
  console.log(book);
  books.push(book);

  return res.status(201).json({ message: "book created success", id })
})

app.delete('/book/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.end('Invalid book id');
  }

  const indexToDelete = books.findIndex(e => e.id === id);

  if (indexToDelete < 0) {
    return res.status(404).send({ message: "book not found" });
  }

  books.splice(indexToDelete, 1);

  return res.status(200).json({ message: 'Deleted success' });
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
})
